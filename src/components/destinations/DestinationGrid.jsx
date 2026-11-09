import DestinationCard from "./DestinationCard";

export default function DestinationGrid({ items }) {
  if (items.length === 0) {
    return (
      <p className="py-16 text-center text-slate-500">
        No destinations in this region yet. Check back soon!
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <DestinationCard
          key={item.id}
          {...item}
          style={{ animationDelay: `${index * 80}ms` }}
        />
      ))}
    </div>
  );
}