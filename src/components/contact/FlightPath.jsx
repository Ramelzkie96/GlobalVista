import { Plane } from "lucide-react";

// Decorative dashed flight path in the top-right corner (hidden on small screens)
export default function FlightPath() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute right-8 top-24 hidden h-36 w-80 lg:block"
    >
      <svg viewBox="0 0 320 140" className="h-full w-full" fill="none">
        <path
          d="M0 138 C 90 128, 210 100, 292 34"
          stroke="#1f5bff"
          strokeWidth="1.5"
          strokeDasharray="5 6"
          strokeLinecap="round"
          opacity="0.7"
        />
      </svg>
      <Plane className="absolute right-0 top-0 h-9 w-9 fill-brand text-brand" />
    </div>
  );
}