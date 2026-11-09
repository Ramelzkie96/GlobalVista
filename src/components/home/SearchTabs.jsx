import { Plane, Hotel, Car, Ship } from "lucide-react";

const tabs = [
  { id: "flights", label: "Flights", icon: Plane },
  { id: "hotels", label: "Hotels", icon: Hotel },
  { id: "cars", label: "Cars", icon: Car },
  { id: "cruises", label: "Cruises", icon: Ship },
];

export default function SearchTabs({ active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          onClick={() => onChange(id)}
          className={`flex cursor-pointer items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition ${
            active === id
              ? "bg-white text-brand shadow"
              : "text-slate-700 hover:bg-white/50"
          }`}
        >
          <Icon className="h-4 w-4" />
          {label}
        </button>
      ))}
    </div>
  );
}