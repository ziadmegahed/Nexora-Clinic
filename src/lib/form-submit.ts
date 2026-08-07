const FORM_SUBMIT_URL = "https://formsubmit.co/ajax/ziadmegahed074@gmail.com";
const DEFAULT_SUBJECT = "Nexora Clinic enquiry";

async function sendFormSubmitSubmission(values: Record<string, unknown>, subject: string) {
    const payload = new FormData();
    payload.set("_subject", subject);
    payload.set("_captcha", "false");
    payload.set("_template", "table");

    if (typeof values.email === "string") {
        payload.set("_replyto", values.email);
    }

    for (const [key, value] of Object.entries(values)) {
        if (value === null || value === undefined) continue;
        if (Array.isArray(value)) {
            if (value.length === 0) {
                continue;
            }
            if (value.every((item) => item instanceof File || item instanceof Blob)) {
                for (const item of value) {
                    payload.append(key, item as File | Blob, item instanceof File ? item.name : "attachment");
                }
                continue;
            }
            payload.set(key, value.join(", "));
        } else if (value instanceof File || value instanceof Blob) {
            payload.append(key, value, value instanceof File ? value.name : "attachment");
        } else {
            payload.set(key, String(value));
        }
    }

    const response = await fetch(FORM_SUBMIT_URL, {
        method: "POST",
        body: payload,
    });

    if (!response.ok) {
        const text = await response.text().catch(() => "");
        throw new Error(`FormSubmit returned ${response.status}: ${text}`);
    }

    return response;
}

export function sendConsultationSubmission(values: Record<string, unknown>) {
    return sendFormSubmitSubmission(values, "Nexora Clinic consultation request");
}

export function sendContactSubmission(values: Record<string, unknown>) {
    return sendFormSubmitSubmission(values, "Nexora Clinic contact enquiry");
}
