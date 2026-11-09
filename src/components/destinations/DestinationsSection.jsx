import { useState } from "react";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import RegionFilter from "./RegionFilter";
import DestinationGrid from "./DestinationGrid";
import { regions } from "../../data/regions";
import { popularDestinations } from "../../data/popularDestinations";

export default function DestinationsSection() {
  const [region, setRegion] = useState("All");

  const visible =
    region === "All"
      ? popularDestinations
      : popularDestinations.filter((d) => d.region === region);

  return (
    <section id="destinations" className="relative scroll-mt-16 overflow-hidden bg-slate-50 py-16">
      <div className="pointer-events-none absolute -left-32 -top-21 h-96 w-96 rounded-full bg-blue-100/70" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-blue-100/70" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading badge="Explore the World" title="Popular." highlight="Destinations" subtitle="Discover breathtaking places and plan your next adventure."/>

        <div className="mt-8">
          <RegionFilter regions={regions} action={region} onChange={setRegion} />
        </div>

        <div className="mt-8" key={region}>
          <DestinationGrid items={visible}/>
        </div>

        <div className="mt-10 flex justify-center">
          <Button variant="outlineBlue">
            View All Destinations <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}