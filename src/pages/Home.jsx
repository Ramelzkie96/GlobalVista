import Hero from "../components/home/Hero";
import TrustBar from "../components/home/TrustBar";
import DestinationsSection from "../components/destinations/DestinationsSection";
import PackagesSection from "../components/packages/PackagesSection";
import ContactSection from "../components/contact/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <DestinationsSection />
      <PackagesSection />
      <ContactSection />
    </>
  );
}