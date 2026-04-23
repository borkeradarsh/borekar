const INDUSTRIES = [
  "Dental clinics",
  "Dermatology",
  "Cosmetic surgery",
  "Interior design studios",
  "Luxury e-commerce",
  "Wellness & spa",
  "IVF & fertility",
  "Architecture firms",
  "Orthodontics",
  "Fashion labels",
]

// Decorative dot between items (kept as a component so the JSX reads cleanly).
function Dot() {
  return (
    <span
      aria-hidden
      className="inline-block h-1 w-1 shrink-0 rounded-full bg-muted-foreground/60"
    />
  )
}

export function IndustryMarquee() {
  // Duplicate the list so the -50% translate loops seamlessly.
  const items = [...INDUSTRIES, ...INDUSTRIES]
  return (
    <div
      className="relative overflow-hidden border-y border-border bg-background py-6"
      aria-label="Industries we work with"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent"
      />

      <div className="flex w-max animate-marquee items-center gap-10">
        {items.map((label, i) => (
          <div
            key={`${label}-${i}`}
            className="flex shrink-0 items-center gap-10"
          >
            <span className="font-mono text-sm uppercase tracking-[0.18em] text-muted-foreground">
              {label}
            </span>
            <Dot />
          </div>
        ))}
      </div>
    </div>
  )
}
