const FORM_SUBMIT_URL =
    "https://formsubmit.co/ajax/info@nexora-healthcare.com";

async function sendFormSubmitSubmission(
    values: Record<string, unknown>,
    subject: string
) {
    const formData = new FormData();

    formData.append("_subject", subject);
    formData.append("_captcha", "false");
    formData.append("_template", "table");

    if (typeof values["email"] === "string" && values["email"].trim()) {
        formData.append("_replyto", values["email"]);
    }

    for (const [key, value] of Object.entries(values)) {
        if (value === null || value === undefined) {
            continue;
        }

        // Handle array
        if (Array.isArray(value)) {
            for (const item of value) {
                if (item instanceof File) {
                    console.log("ADDING FILE:", {
                        key,
                        name: item.name,
                        size: item.size,
                        type: item.type,
                    });

                    formData.append("attachment", item, item.name);
                }
            }

            // Normal array values
            if (
                value.length > 0 &&
                !value.some((item) => item instanceof File)
            ) {
                formData.append(key, value.join(", "));
            }

            continue;
        }

        // Handle single File
        if (value instanceof File) {
            console.log("ADDING SINGLE FILE:", {
                key,
                name: value.name,
                size: value.size,
                type: value.type,
            });

            formData.append("attachment", value, value.name);
            continue;
        }

        // Normal fields
        formData.append(key, String(value));
    }

    // DEBUG: show exactly what will be sent
    console.log("========== FORM DATA ==========");

    for (const [key, value] of formData.entries()) {
        if (value instanceof File) {
            console.log("FILE SENT:", {
                key,
                name: value.name,
                size: value.size,
                type: value.type,
            });
        } else {
            console.log("FIELD SENT:", key, value);
        }
    }

    console.log("================================");

    const response = await fetch(FORM_SUBMIT_URL, {
        method: "POST",
        body: formData,
    });

    if (!response.ok) {
        const text = await response.text().catch(() => "");

        throw new Error(
            `FormSubmit returned ${response.status}: ${text}`
        );
    }

    return response.json();
}

export function sendConsultationSubmission(
    values: Record<string, unknown>
) {
    return sendFormSubmitSubmission(
        values,
        "Nexora Health consultation request"
    );
}

export function sendContactSubmission(
    values: Record<string, unknown>
) {
    return sendFormSubmitSubmission(
        values,
        "Nexora Health contact enquiry"
    );
}