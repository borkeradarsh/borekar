export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto w-full max-w-6xl px-6 py-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-block h-2 w-2 rounded-full bg-foreground"
            />
            <span className="text-sm font-medium tracking-tight text-foreground">
              Borekar
            </span>
            <span className="ml-2 text-sm text-muted-foreground">
              Performance web & lead generation
            </span>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center gap-x-6 gap-y-2"
          >
            <a
              href="/services"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Services
            </a>
            <a
              href="/case-studies"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Case studies
            </a>

          </nav>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-2 border-t border-border pt-6 md:flex-row md:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Borekar. All rights reserved.
          </p>
          <a
            href="mailto:contact@borekar.tech"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            contact@borekar.tech
          </a>
        </div>
      </div>
    </footer>
  )
}
