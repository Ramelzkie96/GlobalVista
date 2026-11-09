import { useState } from "react";
import { Heart, ArrowRight } from "lucide-react";
import { destinations } from "../../data/destinations";

function DestinationCard({ name, price, image }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="flex items-center gap-3 rounded-xl bg-white/90 p-2 shadow-sm transition hover:shadow-md">
      <img src={image} alt={name} className="h-12 w-12 rounded-lg object-cover bg-slate-200" />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-slate-800">{name}</p>
        <p className="text-xs text-slate-500">from ${price.toLocaleString()}</p>
      </div>
      <button onClick={() => setLiked(!liked)} aria-label="Save destination" className="cursor-pointer pr-1">
        <Heart
          className={`h-4 w-4 ${liked ? "fill-red-500 text-red-500" : "text-slate-500"}`}
        />
      </button>
    </div>
  );
}

export default function AISuggestions() {
  return (
    <div className="mt-5">
      <div className="mb-2 flex items-center justify-between text-[11px]">
        <span className="font-semibold tracking-wide text-slate-700">AI SUGGESTIONS FOR YOU</span>
        <a href="#destinations" className="flex items-center gap-1 font-medium text-slate-700 hover:text-brand">
          See more ideas <ArrowRight className="h-3 w-3" />
        </a>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {destinations.map((d) => (
          <DestinationCard key={d.id} {...d} />
        ))}
      </div>
    </div>
  );
}