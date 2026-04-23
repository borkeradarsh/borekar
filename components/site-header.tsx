import { ArrowUpRightIcon } from "@/components/icons"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case studies" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/70 backdrop-blur-xl">
      <details className="group md:hidden">
        <summary
          className="absolute top-3 right-6 z-50 inline-flex h-8 w-8 cursor-pointer list-none items-center justify-center rounded-md text-foreground [&::-webkit-details-marker]:hidden"
          aria-label="Toggle menu"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-5 w-5 group-open:hidden"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="hidden h-5 w-5 group-open:block"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </summary>

        <div className="hidden border-t border-border group-open:block">
          <nav
            aria-label="Mobile primary"
            className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-6 py-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-2 py-2.5 text-sm text-foreground hover:bg-muted"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/917022715411"
              className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-3 py-2.5 text-sm font-medium text-primary-foreground"
            >
              Book a call
            </a>
          </nav>
        </div>
      </details>

      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-6">
        <a
          href="/"
          className="flex items-center gap-2"
          aria-label="Borekar home"
        >
          <span
            aria-hidden="true"
            className="inline-block h-2 w-2 rounded-full bg-foreground"
          />
          <span className="text-sm font-medium tracking-tight text-foreground">
            Borekar
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="https://wa.me/917022715411"
            className="group inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Book a call
            <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <span className="inline-flex h-8 w-8 md:hidden" aria-hidden="true" />
      </div>
    </header>
  )
}
