import { Globe, Send } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import ContactInfoCard from "./ContactInfoCard";
import ContactForm from "./ContactForm";
import FollowUs from "./FollowUs";
import FlightPath from "./FlightPath";

export default function ContactSection() {
  return (
    <section id="contact" className="relative min-h-screen scroll-mt-16 overflow-hidden bg-gradient-to-b from-blue-50/60 to-white py-16">
     <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-100/60" />
     <div className="pointer-events-none absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-blue-100/60" />

     <Globe aria-hidden="true" strokeWidth={0.6} className="pointer-events-none absolute -right-24 top-10 hidden h-[30rem] w-[30rem] text-blue-100 lg:block" />
     <FlightPath />

     <div className="relative mx-auto max-w-7xl px-6">
      <SectionHeading icon={Send} badge="Get in Touch" title="Contact" highlight="Us" subtitle="Have questions or need help? We're here to assist you."/>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_1fr]">
        <ContactInfoCard />
        <ContactForm />
      </div>

      <div className="mt-12">
        <FollowUs/>
      </div>
     </div>
    </section>
  );
}