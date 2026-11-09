import { useState } from "react";
import { ArrowLeftRight, Calendar, MapPin, Search, Users, ChevronDown } from "lucide-react";
import SearchTabs from "./SearchTabs";
import AISuggestions from "./AISuggestions";

function Field({ label, icon: Icon, children }) {
  return (
    <div className="relative flex flex-col gap-1 rounded-xl bg-white/80 px-4 py-3">
      <span className="text-[11px] font-medium text-slate-500">{label}</span>
      <div className="flex items-center gap-2 text-sm font-medium text-slate-800">
        <Icon className="h-4 w-4 shrink-0 text-slate-500" />
        {children}
      </div>
    </div>
  );
}

const inputClass = "w-full bg-transparent outline-none placeholder:text-slate-500";

export default function SearchCard() {
  const [tab, setTab] = useState("flights");
  const [form, setForm] = useState({
    from: "New York, USA",
    to: "",
    depart: "2026-11-24",
    ret: "2026-11-30",
    travelers: "2 Adults, 1 Child",
  });

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const swap = () => setForm({ ...form, from: form.to, to: form.from });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching", tab, form);
  };

  return (
    <div className="w-full max-w-5xl rounded-3xl border border-white/40 bg-white/25 p-5 shadow-2xl backdrop-blur-xl">
      <SearchTabs active={tab} onChange={setTab} />

      <form
        onSubmit={handleSubmit}
        className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-12"
      >
        <div className="relative md:col-span-4">
          <div className="grid grid-cols-2 gap-2">
            <Field label="From" icon={MapPin}>
              <input className={inputClass} value={form.from} onChange={update("from")} />
            </Field>
            <Field label="To" icon={MapPin}>
              <input
                className={inputClass}
                placeholder="Anywhere"
                value={form.to}
                onChange={update("to")}
              />
            </Field>
          </div>
          <button
            type="button"
            onClick={swap}
            aria-label="Swap locations"
            className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-brand text-white shadow-md hover:bg-brand-dark"
          >
            <ArrowLeftRight className="h-4 w-4" />
          </button>
        </div>

        <div className="md:col-span-2">
          <Field label="Depart" icon={Calendar}>
            <input type="date" className={inputClass} value={form.depart} onChange={update("depart")} />
          </Field>
        </div>

        <div className="md:col-span-2">
          <Field label="Return" icon={Calendar}>
            <input type="date" className={inputClass} value={form.ret} onChange={update("ret")} />
          </Field>
        </div>

        <div className="md:col-span-2">
          <Field label="Travelers" icon={Users}>
            <select className={`${inputClass} cursor-pointer appearance-none text-[13px]`} value={form.travelers} onChange={update("travelers")}>
              <option>1 Adult</option>
              <option>2 Adults</option>
              <option>2 Adults, 1 Child</option>
              <option>2 Adults, 2 Children</option>
            </select>
            <ChevronDown className="h-4 w-4 text-slate-500" />
          </Field>
        </div>

        <button
          type="submit"
          className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-brand px-6 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-brand-dark md:col-span-2"
        >
          Search <Search className="h-4 w-4" />
        </button>
      </form>

      <AISuggestions />
    </div>
  );
}