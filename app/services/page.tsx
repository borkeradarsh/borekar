import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  Code2Icon,
  TargetIcon,
} from "@/components/icons"

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  return (
    <section id={id} className={`border-b border-border ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-6 py-24 lg:py-28">
        {children}
      </div>
    </section>
  )
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
      <span
        aria-hidden
        className="inline-block h-1 w-1 rounded-full bg-foreground/70"
      />
      {children}
    </div>
  )
}

const services = [
  {
    index: "01",
    icon: Code2Icon,
    title: "Web development",
    tagline: "Custom-coded. Built to convert.",
    description:
      "We build fast, secure, custom-coded websites on Next.js. No bloated templates, no page-builders. Every pixel exists to move the visitor toward a purchase.",
    deliverables: [
      "Custom Next.js codebase",
      "Core Web Vitals optimized",
      "Payments & CMS integrated",
      "Analytics & tracking setup",
    ],
    ideal: "E-commerce brands & studios",
    timeline: "3 – 5 weeks",
  },
  {
    index: "02",
    icon: TargetIcon,
    title: "Lead generation",
    tagline: "Meta ad systems. Qualified leads.",
    description:
      "We run localized Meta campaigns that deliver qualified, consultation-ready leads for clinics and studios - not cheap, unqualified clicks.",
    deliverables: [
      "Meta ads strategy & creative",
      "Dedicated landing pages",
      "CRM + WhatsApp follow-up",
      "Weekly performance reporting",
    ],
    ideal: "Clinics & boutique studios",
    timeline: "Month-to-month retainer",
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* HEADER */}
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>Services</Eyebrow>
          <h1 className="mt-6 text-5xl font-medium leading-[1.05] tracking-tight text-foreground md:text-6xl">
            Two disciplines.
            <br />
            <span className="text-muted-foreground">One outcome: revenue.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            We focus on only two things - and we&apos;re exceptional at both.
            No scattered deliverables, no bolt-on retainers.
          </p>
        </div>
      </Section>

      {/* SERVICE CARDS - strictly mirrored */}
      <Section>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((s) => {
            const Icon = s.icon
            return (
              <article
                key={s.index}
                className="flex flex-col gap-8 rounded-xl border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-[0_8px_30px_-12px_rgba(245,242,234,0.08)] md:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs tracking-tight text-muted-foreground">
                    {s.index}
                  </span>
                  <Icon className="h-5 w-5 text-muted-foreground" />
                </div>

                <div>
                  <h2 className="text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                    {s.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {s.tagline}
                  </p>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>

                <div className="border-t border-border pt-6">
                  <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                    What you get
                  </h3>
                  <ul className="mt-4 flex flex-col gap-2">
                    {s.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-center gap-2 text-sm text-foreground"
                      >
                        <span
                          aria-hidden
                          className="inline-block h-1 w-1 rounded-full bg-foreground/70"
                        />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto grid grid-cols-2 gap-6 border-t border-border pt-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                      Ideal for
                    </p>
                    <p className="mt-2 text-sm text-foreground">{s.ideal}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                      Timeline
                    </p>
                    <p className="mt-2 font-mono text-sm text-foreground">
                      {s.timeline}
                    </p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </Section>

      {/* PROCESS - three symmetric steps */}
      <Section>
        <Eyebrow>How we work</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          A focused, three-step engagement.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Step
            index="01"
            title="Audit"
            body="We review your site, ads, and funnel. You get a clear written diagnosis before we write a single line of code."
          />
          <Step
            index="02"
            title="Build"
            body="We ship - design, development, ad creative, landing pages - in weekly cycles you can actually track."
          />
          <Step
            index="03"
            title="Compound"
            body="Every week we report, iterate, and double down on what&apos;s working. Revenue compounds month over month."
          />
        </div>
      </Section>

      {/* CTA */}
      <Section className="border-b-0">
        <div className="flex flex-col items-center text-center">
          <Eyebrow>Next step</Eyebrow>
          <h2 className="mt-6 max-w-2xl text-4xl font-medium tracking-tight text-foreground md:text-5xl">
            Pick the one that fits. Or combine both.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
            A 10-minute call is enough to tell you if we&apos;re the right
            team - and exactly how much revenue we can unlock.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="https://wa.me/917022715411"
              className="group inline-flex items-center gap-1.5 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Book a call
              <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="/case-studies"
              className="inline-flex items-center gap-1.5 px-1 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              See the work <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}

function Step({
  index,
  title,
  body,
}: {
  index: string
  title: string
  body: string
}) {
  return (
    <div className="group flex flex-col gap-6 rounded-xl border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-2 hover:border-foreground/25 hover:shadow-[0_12px_40px_-15px_rgba(245,242,234,0.1)] md:p-10">
      <span className="font-mono text-xs tracking-tight text-muted-foreground transition-colors duration-300 group-hover:text-foreground/70">
        {index}
      </span>
      <h3 className="text-xl font-medium tracking-tight text-foreground">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  )
}
