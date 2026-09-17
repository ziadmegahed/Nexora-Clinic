const RECIPIENT = "info@nexora-healthcare.com";
const FORM_SUBMIT_AJAX_URL = `https://formsubmit.co/ajax/${RECIPIENT}`;
// FormSubmit only delivers file attachments through its standard (non-AJAX)
// endpoint. The AJAX endpoint silently drops them.
const FORM_SUBMIT_URL = `https://formsubmit.co/${RECIPIENT}`;

const MAX_ATTACHMENT_BYTES = 5 * 1024 * 1024; // FormSubmit rejects larger files

function collectFiles(values: Record<string, unknown>): File[] {
    const files: File[] = [];

    for (const value of Object.values(values)) {
        if (value instanceof File) {
            files.push(value);
        } else if (Array.isArray(value)) {
            for (const item of value) {
                if (item instanceof File) files.push(item);
            }
        }
    }

    return files;
}

function buildFormData(
    values: Record<string, unknown>,
    subject: string,
    includeFiles: boolean
) {
    const formData = new FormData();

    formData.append("_subject", subject);
    formData.append("_captcha", "false");
    formData.append("_template", "table");

    if (typeof values["email"] === "string" && values["email"].trim()) {
        formData.append("_replyto", values["email"]);
    }

    for (const [key, value] of Object.entries(values)) {
        if (value === null || value === undefined) continue;

        if (value instanceof File) {
            if (includeFiles) formData.append("attachment", value, value.name);
            continue;
        }

        if (Array.isArray(value)) {
            const fileItems = value.filter((item): item is File => item instanceof File);

            if (fileItems.length) {
                if (includeFiles) {
                    for (const item of fileItems) {
                        formData.append("attachment", item, item.name);
                    }
                }
                continue;
            }

            if (value.length) formData.append(key, value.join(", "));
            continue;
        }

        formData.append(key, String(value));
    }

    return formData;
}

async function sendFormSubmitSubmission(
    values: Record<string, unknown>,
    subject: string
) {
    const files = collectFiles(values);
    const oversized = files.filter((f) => f.size > MAX_ATTACHMENT_BYTES);

    if (oversized.length) {
        throw new Error(
            `These files are too large to send (max 5 MB each): ${oversized
                .map((f) => f.name)
                .join(", ")}`
        );
    }

    if (files.length) {
        // Multipart POST to the standard endpoint carries the attachments.
        // The endpoint answers with a redirect to an HTML page and no CORS
        // headers, so the response is opaque — the submission is still made.
        const formData = buildFormData(values, subject, true);
        formData.append("_next", "https://formsubmit.co/thanks");

        await fetch(FORM_SUBMIT_URL, {
            method: "POST",
            mode: "no-cors",
            body: formData,
        });

        return { success: "true" };
    }

    const response = await fetch(FORM_SUBMIT_AJAX_URL, {
        method: "POST",
        body: buildFormData(values, subject, false),
    });

    if (!response.ok) {
        const text = await response.text().catch(() => "");
        throw new Error(`FormSubmit returned ${response.status}: ${text}`);
    }

    return response.json();
}

export function sendConsultationSubmission(values: Record<string, unknown>) {
    return sendFormSubmitSubmission(
        values,
        "Nexora Health consultation request"
    );
}

export function sendContactSubmission(values: Record<string, unknown>) {
    return sendFormSubmitSubmission(values, "Nexora Health contact enquiry");
}
