import RegionFilter from "../destinations/RegionFilter";

// Same pill design as the region filter, so we reuse it
export default function CategoryFilter({ categories, active, onChange }) {
  return <RegionFilter regions={categories} active={active} onChange={onChange} />;
}