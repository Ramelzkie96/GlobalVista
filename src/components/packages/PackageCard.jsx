import { ArrowRight, Calendar, Flame, MapPin, Users } from "lucide-react";
import Button from "../ui/Button";

export default function PackageCard({
  title,
  country,
  description,
  days,
  people,
  price,
  popular,
  image,
  style,
}) {
  return (
    <div className="@container h-full">
      <article style={style} className="group flex h-full animate-fade-up flex-col overflow-hidden rounded-2xl bg-white shadow-lg shadow-slate-200/80 transition hover:-translate-y-1 hover:shadow-xl @sm:flex-row">
        <div className="relative h-52 shrink-0 overflow-hidden bg-slate-200 @sm:h-auto @sm:min-h-56 @sm:w-[42%]">
          <img className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" src={image} alt={`${title}, ${country}`} />

          {popular && (
            <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-brand px-3 py-1.5 text-xs font-semibold text-white shadow-lg">
              <Flame  className="h-3.5 w-3.5 fill-white"/>
              Popular
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-5">
          <p className="flex items-center gap-1.5 text-sm text-slate-500">
            <MapPin  className="h-3.5 w-3.5"/>
            {country}
          </p>

          <h3 className="mt-1 text-xl font-bold text-blue-950">{title}</h3>
          <p className="mt-1 text-sm leading-snug text-slate-500">{description}</p>

          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold text-slate-700">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-slate-500"/>
              {days} Days
            </span>
            <span className="h-3 w-px bg-slate-300" />
            <span className="flex items-center gap-1.5">
              <Users className="h-3.5 w-3.5 text-slate-500"/>
              {people} People
            </span>
          </div>

          <div className="mt-auto flex-wrap items-center justify-between gap-x-3 gap-y-2 pt-4">
            <p>
              <span className="text-2xl font-extrabold text-brand">
                ${price.toLocaleString()}
              </span>
              <span className="text-xs text-slate-500"> / person</span>
            </p>

            <Button variant="outlineBlue" size="sm">
              View Package <ArrowRight className="h-3.5 w-3.5"/>
            </Button>
          </div>
        </div>
      </article>
    </div>
  );
}