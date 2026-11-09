export default function FormField({
  icon: Icon,
  as = "input",
  error,
  className = "",
  ...props
}) {
  const Component = as;
  const isTextarea = as === "textarea";

  return (
    <div className={className}>
      <div className="relative">
        <Icon
          className={`pointer-events-none absolute left-4 h-5 w-5 text-slate-500 ${
            isTextarea ? "top-4" : "top-1/2 -translate-y-1/2"
          }`}
        />
        <Component
          aria-invalid={error ? "true" : "false"}
          className={`w-full rounded-xl border bg-white py-3.5 pl-12 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:ring-4 ${
            error
              ? "border-red-400 focus:border-red-400 focus:ring-red-100"
              : "border-slate-200 focus:border-brand focus:ring-blue-100"
          } ${isTextarea ? "min-h-32 resize-y" : ""}`}
          {...props}
        />
      </div>
      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  );
}