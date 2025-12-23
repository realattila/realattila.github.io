import { type FormEvent, useRef, useState } from "react";

type StatusTone = "success" | "error" | "";

export function useContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusTone, setStatusTone] = useState<StatusTone>("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");
    setStatusTone("");

    try {
      const form = event.currentTarget;
      const data = new FormData(form);
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatusMessage("Thanks for your submission!");
        setStatusTone("success");
        formRef.current?.reset();
        return;
      }

      const payload = await response.json().catch(() => null);
      if (payload?.errors) {
        const message = payload.errors
          .map((error: { message: string }) => error.message)
          .join(", ");
        setStatusMessage(message);
      } else {
        setStatusMessage("Oops! There was a problem submitting your form");
      }
      setStatusTone("error");
    } catch {
      setStatusMessage("Oops! There was a problem submitting your form");
      setStatusTone("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return {
    formRef,
    isSubmitting,
    statusMessage,
    statusTone,
    handleSubmit,
  };
}
