"use server";

export type FormState = {
  success?: boolean;
  error?: string;
};

export async function submitContactForm(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const formspreeId = process.env.FORMSPREE_ID;
  if (!formspreeId) {
    return {
      error:
        "Contact form is not configured. Add FORMSPREE_ID to your environment variables.",
    };
  }

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return { error: "Please fill in all fields." };
  }

  try {
    const body = new URLSearchParams({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    });

    const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      return { error: data.error || "Something went wrong. Please try again." };
    }

    return { success: true };
  } catch {
    return { error: "Failed to send message. Please try again." };
  }
}
