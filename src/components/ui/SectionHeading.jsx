import { MapPin } from "lucide-react";

export default function SectionHeading({
  badge,
  title,
  highlight,
  after,
  subtitle,
  icon: Icon = MapPin,
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <span className="inline-flex items-center gap-2 rounded-full bg-blue-100/80 px-5 py-2 text-sm font-semibold text-brand">
        <Icon className="h-4 w-4 fill-brand/20" />
        {badge}
      </span>

      <h2 className="mt-5 text-4xl font-extrabold text-blue-950 sm:text-5xl">
        {title} <span className="text-brand">{highlight}</span>
        {after ? ` ${after}` : null}
      </h2>

      <p className="mt-3 max-w-xl text-base text-slate-500 sm:text-lg">
        {subtitle}
      </p>
    </div>
  );
}