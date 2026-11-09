export default function RegionFilter({ regions, active, onChange }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {regions.map(({ id, label, icon: Icon }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            onClick={() => onChange(id)}
            className={`flex cursor-pointer items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
              isActive
                ? "border-brand bg-brand text-white shadow-lg shadow-blue-500/30"
                : "border-slate-200 bg-white text-blue-950 hover:border-brand hover:text-brand"
            }`}
          >
            <Icon className="h-4 w-4" />
            {label}
          </button>
        );
      })}
    </div>
  );
}