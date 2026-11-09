import { Globe } from "lucide-react";
import { socialLinks } from "../../data/socialLinks";

export default function FollowUs() {
  return (
    <div className="flex items-center justify-center gap-4">
      <span className="hidden h-px w-24 bg-slate-300 sm:block md:w-40" />

      <div className="flex flex-wrap items-center justify-center gap-4">
        <p className="flex items-center gap-2 text-lg font-bold text-blue-950">
          <Globe className="h-5 w-5 text-brand" />
          Follow Us
        </p>

        <div className="flex items-center gap-3">
          {socialLinks.map(({ id, label, href, icon: Icon }) => (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100/80 text-blue-950 transition hover:-translate-y-0.5 hover:bg-brand hover:text-white"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>

      <span className="hidden h-px w-24 bg-slate-300 sm:block md:w-40" />
    </div>
  );
}