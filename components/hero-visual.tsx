import {
  ArrowUpRightIcon,
  TargetIcon,
  TrendingUpIcon,
  UsersIcon,
} from "@/components/icons"

// Fake-but-believable campaign metrics shown in a product-style dashboard card.
// Purely decorative - no runtime data. Values match our real case study.
const weekData = [42, 58, 51, 73, 69, 88, 94, 82, 96, 110, 103, 125]
const maxBar = Math.max(...weekData)

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-5xl">
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-x-10 -top-10 bottom-0 bg-[radial-gradient(ellipse_at_top,rgba(245,242,234,0.06),transparent_60%)]"
      />

      <div className="relative overflow-hidden rounded-xl border border-border bg-card shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)]">
        {/* browser chrome */}
        <div className="flex items-center justify-between border-b border-border bg-background/40 px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
          </div>
          <div className="hidden items-center gap-2 rounded-md border border-border bg-background/60 px-3 py-1 font-mono text-[11px] text-muted-foreground sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/70 animate-pulse-dot" />
            Borekar.studio / campaign / high-ticket-client
          </div>
          <span className="font-mono text-[11px] text-muted-foreground">
            live
          </span>
        </div>

        {/* dashboard body */}
        <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-3">
          {/* left - KPIs */}
          <div className="bg-card p-5 sm:col-span-1">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Campaign
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-border px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                <span className="h-1 w-1 rounded-full bg-foreground animate-pulse-dot" />
                Active
              </span>
            </div>
            <p className="mt-3 text-base font-medium text-foregroun
            d">
              Solar Company - Bangalore
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Meta · 90-day window
            </p>

            <div className="mt-6 flex flex-col gap-4">
              <KpiRow
                icon={<UsersIcon className="h-3.5 w-3.5" />}
                label="Leads"
                value="957+"
                delta="+12%"
              />
              <KpiRow
                icon={<TargetIcon className="h-3.5 w-3.5" />}
                label="Cost / lead"
                value="₹45"
                delta="-18%"
                positive
              />
              <KpiRow
                icon={<TrendingUpIcon className="h-3.5 w-3.5" />}
                label="High-Value Projects Closed"
                value="40+"
                delta="+4 this wk"
              />
            </div>
          </div>

          {/* right - chart */}
          <div className="bg-card p-5 sm:col-span-2">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Lead volume
                </span>
                <p className="mt-1 text-sm text-foreground">
                  Last 12 weeks
                </p>
              </div>
              <div className="flex items-center gap-2 rounded-md border border-border px-2 py-1 font-mono text-[10px] text-muted-foreground">
                <ArrowUpRightIcon className="h-3 w-3 text-foreground" />
                <span className="text-foreground">+138%</span>
              </div>
            </div>

            <div className="mt-6 flex h-40 items-end gap-1.5 sm:gap-2">
              {weekData.map((v, i) => {
                const h = (v / maxBar) * 100
                const isLast = i === weekData.length - 1
                return (
                  <div
                    key={i}
                    className="group relative flex flex-1 items-end"
                    style={{ height: "100%" }}
                  >
                    <div
                      className={`animate-grow-bar w-full rounded-sm transition-colors ${isLast
                        ? "bg-foreground"
                        : "bg-foreground/20 group-hover:bg-foreground/40"
                        }`}
                      style={{
                        height: `${h}%`,
                        animationDelay: `${i * 40}ms`,
                      }}
                    />
                  </div>
                )
              })}
            </div>

            <div className="mt-3 flex items-center justify-between font-mono text-[10px] text-muted-foreground">
              <span>W01</span>
              <span>W04</span>
              <span>W08</span>
              <span>W12</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function KpiRow({
  icon,
  label,
  value,
  delta,
  positive = false,
}: {
  icon: React.ReactNode
  label: string
  value: string
  delta: string
  positive?: boolean
}) {
  return (
    <div className="flex items-center justify-between border-b border-border pb-3 last:border-b-0 last:pb-0">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <span className="text-foreground/80">{icon}</span>
        {label}
      </div>
      <div className="flex items-baseline gap-2">
        <span className="font-mono text-lg font-medium tracking-tight text-foreground">
          {value}
        </span>
        <span
          className={`font-mono text-[10px] ${positive ? "text-foreground" : "text-muted-foreground"
            }`}
        >
          {delta}
        </span>
      </div>
    </div>
  )
}
