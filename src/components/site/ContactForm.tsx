import { useState } from "react";
import { toast } from "sonner";

const EMAILJS_ENDPOINT = "https://api.emailjs.com/api/v1.0/email/send";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const destination = String(formData.get("destination") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
      toast.error("Email service is not configured yet. Add the EmailJS keys first.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(EMAILJS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            name,
            email,
            phone: phone || "Not provided",
            destination: destination || "Not provided",
            message,
            title: `Free Consultation Request - ${name || "New Student Inquiry"}`,
            reply_to: email,
            to_email: "ashbyeducationservices@gmail.com",
          },
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "EmailJS request failed");
      }

      form.reset();
      toast.success("Thank you! Your consultation request has been sent.");
    } catch (error) {
      console.error("Failed to send consultation request", error);
      toast.error(
        error instanceof Error
          ? `We couldn't send your request: ${error.message}`
          : "We couldn't send your request right now. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-primary mb-2">Full Name</label>
          <input required type="text" name="name" className="w-full border border-border bg-white px-4 py-3 text-sm rounded focus:outline-none focus:border-primary" />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-primary mb-2">Email</label>
          <input required type="email" name="email" className="w-full border border-border bg-white px-4 py-3 text-sm rounded focus:outline-none focus:border-primary" />
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-primary mb-2">Phone</label>
          <input type="tel" name="phone" className="w-full border border-border bg-white px-4 py-3 text-sm rounded focus:outline-none focus:border-primary" />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-primary mb-2">Preferred Destination</label>
          <select name="destination" className="w-full border border-border bg-white px-4 py-3 text-sm rounded focus:outline-none focus:border-primary">
            <option>United Kingdom</option>
            <option>United States</option>
            <option>Australia</option>
            <option>Malaysia</option>
            <option>Turkey</option>
            <option>Germany</option>
            <option>Hungary</option>
            <option>New Zealand</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-primary mb-2">Message</label>
        <textarea required name="message" rows={5} className="w-full border border-border bg-white px-4 py-3 text-sm rounded focus:outline-none focus:border-primary resize-none" />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="inline-flex justify-center items-center bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold rounded hover:bg-primary-deep transition-colors disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send Consultation Request"}
      </button>
    </form>
  );
};

export default ContactForm;
