/** Monogram mark + wordmark. `light` is for use on dark backgrounds. */
export default function Logo({ light = false, tagline }: { light?: boolean; tagline?: string }) {
  return (
    <span className="flex items-center gap-3">
      <span
        className={`inline-flex size-11 shrink-0 items-center justify-center rounded-xl font-serif text-lg font-bold text-gold-300 ring-1 ring-gold-400/70 ${
          light ? "bg-forest-800" : "bg-forest-900"
        }`}
        aria-hidden="true"
      >
        GD
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={`font-serif text-[1.05rem] font-semibold tracking-wide sm:text-lg ${
            light ? "text-white" : "text-forest-900"
          }`}
        >
          GD TAX SERVICES
        </span>
        {tagline ? (
          <span className={`hidden text-[0.7rem] sm:block ${light ? "text-gold-300" : "text-gold-600"}`}>
            {tagline}
          </span>
        ) : null}
      </span>
    </span>
  );
}
