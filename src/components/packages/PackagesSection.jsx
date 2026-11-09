import { useState } from "react";
import { ArrowRight, ArrowUp, Briefcase, Plane } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import CategoryFilter from "./CategoryFilter";
import PackageGrid from "./PackageGrid";
import { packageCategories } from "../../data/packageCategories";
import { packages } from "../../data/packages";

const INITIAL_COUNT = 6;

export default function PackagesSection() {
  const [category, setCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filtered =
    category === "All"
      ? packages
      : packages.filter((p) => p.category === category);

  // The "Explore More" button only makes sense on the All tab
  const canExpand = category === "All" && packages.length > INITIAL_COUNT;
  const visible = canExpand && !showAll ? filtered.slice(0, INITIAL_COUNT) : filtered;

  return (
    <section id="packages" className="relative scroll-mt-16 overflow-hidden bg-gradient-to-b from-white to-blue-50/60 py-16">
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-100/60" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-blue-100/60" />

      <div className="relative mx-auto max-w-[90rem] px-6">
        <SectionHeading icon={Briefcase} badge="Travel Packages" title="Our" highlight="Travel" after="Packages" subtitle="Curated travel packages for unforgettable experiences around the world."/>

        <div className="mt-8">
          <CategoryFilter categories={packageCategories} active={category} onChange={setCategory} />
        </div>

        <div key={category} className="mt-8">
          <PackageGrid items={visible} />
        </div>

        {canExpand && (
          <div className="mt-10 flex justify-center">
            <Button variant="outlineBlue" onClick={() => setShowAll(!showAll)}>
              <Plane className="h-4 w-4" />
              {showAll ? "Show Fewer Packages" : "Explore More Packages"}
              {showAll ? <ArrowUp className="" /> : <ArrowRight className="" />}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}