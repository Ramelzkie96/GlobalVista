import { trustItems } from "../../data/trustItems";

export default function TrustBar() {
  return (
    <section className="bg-sate-50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-6 sm:grid-cols-2 lg:grid-cols-4">
        {trustItems.map(({ id, icon: Icon, title, text}) => (
          <div key={id} className="flex items-center gap-3">
            <Icon className="h-6 w-6 shrink-0 text-brand" />
            <div>
              <p className="text-sm font-semibold text-slate-800">{title}</p>
              <p className="text-xs text-slate-500">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}