import { ArrowRight, MapPin } from "lucide-react";

export default function DestinationCard({ name, country, description, image, style }) {
  return (
    <article style={style} className="group relative h-64 animate-fade-u overflow-hidden rounded-2xl bg-slate-200 shadow-lg shadow-slate-300/60">
     <img src={image} alt={`${name}, ${country}`} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"/>

     <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
     <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 text-white">
        <div className="min-w-0">
          <p className="flex items-center gap-1.5 text-sm font-medium">
            <MapPin className="h-4 w-4 fill-white" />
            {country}
          </p>
          <h3 className="text-2xl font-bold">{name}</h3>
          <p className="text-sm text-white/90">{description}</p>

          <a href="#packages" aria-label={`Explore ${name}`} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-brand shadow-md transition group-hover:bg-brand group-hover:text-white">
            <ArrowRight className="" />
          </a>
        </div>
     </div>
    </article>
  );
}