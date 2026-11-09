export default function ContactInfoItem({ icon: Icon, label, lines, href }) {
  const details = lines.map((line) => (
    <span key={line} className="block">
      {line}
    </span>
  ));

  return (
    <li className="flex items-start gap-4">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100/80 text-brand">
        <Icon className="h-5 w-5" />
      </span>

      <div className="pt-0.5">
        <p className="text-sm font-bold text-brand">{label}</p>
        {href ? (
          <a
            href={href}
            className="text-sm leading-snug text-slate-700 transition hover:text-brand"
          >
            {details}
          </a>
        ) : (
          <p className="text-sm leading-snug text-slate-700">{details}</p>
        )}
      </div>
    </li>
  );
}