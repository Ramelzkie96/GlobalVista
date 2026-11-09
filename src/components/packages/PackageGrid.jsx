import PackageCard from "./PackageCard";

export default function PackageGrid({ items }) {
  if (items.length === 0) {
    return (
      <p className="py-16 text-center text-slate-500">
        No packages in this category yet. Check back soon!
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3">
      {items.map((item, index) => (
        <PackageCard
          key={item.id}
          {...item}
          style={{ animationDelay: `${(index % 6) * 80}ms` }}
        />
      ))}
    </div>
  );
}