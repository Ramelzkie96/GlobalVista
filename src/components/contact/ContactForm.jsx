import { AlertCircle, CheckCircle2, Loader2, Mail, MessageSquare, Send, Tag, User } from "lucide-react";
import FormField from "./FormField";
import useContactForm from "../../hooks/useContactForm";

export default function ContactForm() {
  const { values, errors, status, handleChange, handleSubmit } = useContactForm();
  const sending = status === "sending";

  return (
    <div className="rounded-3xl bg-white p-7 shadow-xl shadow-slate-200/80 sm:p-9">
      <p className="text-sm font-bold uppercase tracking-widest text-brand">
        Send a Message
      </p>
      <h3 className="mt-3 text-3xl font-extrabold text-blue-950">
        Drop Us a Message
      </h3>
      <p className="mt-3 text-sm text-slate-500">
        Fill out the form below and we&apos;ll get back to you as soon as
        possible.
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormField
            icon={User}
            name="name"
            type="text"
            placeholder="Your Name *"
            autoComplete="name"
            value={values.name}
            onChange={handleChange}
            error={errors.name}
          />
          <FormField
            icon={Mail}
            name="email"
            type="email"
            placeholder="Your Email *"
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
            error={errors.email}
          />
        </div>

        <FormField
          icon={Tag}
          name="subject"
          type="text"
          placeholder="Subject"
          value={values.subject}
          onChange={handleChange}
        />

        <FormField
          as="textarea"
          icon={MessageSquare}
          name="message"
          rows={4}
          placeholder="Your Message *"
          value={values.message}
          onChange={handleChange}
          error={errors.message}
        />

        <button
          type="submit"
          disabled={sending}
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-brand py-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-70"
        >
          {sending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" /> Send Message
            </>
          )}
        </button>

        {status === "success" && (
          <p
            role="status"
            className="flex items-center gap-2 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700"
          >
            <CheckCircle2 className="h-4 w-4 shrink-0" />
            Message sent! We&apos;ll get back to you soon.
          </p>
        )}

        {status === "error" && (
          <p
            role="alert"
            className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600"
          >
            <AlertCircle className="h-4 w-4 shrink-0" />
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}