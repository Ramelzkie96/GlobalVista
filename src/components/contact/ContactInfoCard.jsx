import ContactInfoItem from "./ContactInfoItem";
import { contactInfo } from "../../data/contactInfo";

export default function ContactInfoCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-200/80">
      {/* Text side */}
      <div className="relative z-10 p-7 sm:w-[58%] sm:p-9">
        <p className="text-sm font-bold uppercase tracking-widest text-brand">
          Contact Information
        </p>

        <h3 className="mt-3 text-3xl font-extrabold leading-tight text-blue-950">
          Let&apos;s Plan Your Next Adventure
        </h3>

        <p className="mt-4 text-base leading-snug text-slate-500">
          Reach out to us anytime. Our team is ready to help you with your
          travel plans and inquiries.
        </p>

        <ul className="mt-6 space-y-4">
          {contactInfo.map((item) => (
            <ContactInfoItem key={item.id} {...item} />
          ))}
        </ul>
      </div>

      {/* Photo: below the text on phones, slanted on the right edge from sm up */}
      <div className="relative h-60 sm:absolute sm:inset-y-0 sm:right-0 sm:h-auto sm:w-[48%] sm:[clip-path:polygon(24%_0,100%_0,100%_100%,0_100%)]">
        <img
          src="/contact/contact-photo.png"
          alt="Airplane flying over a calm blue sea"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  );
}