import Image from "next/image"
import { ArrowUpRightIcon } from "@/components/icons"

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

type CaseStudyData = {
  index: string
  category: string
  client: string
  headline: string
  summary: string
  image: string
  metrics: { value: string; label: string }[]
  highlights: string[]
}

const caseStudies: CaseStudyData[] = [
  {
    index: "01",
    category: "Lead generation · Renewable Energy",
    client: "High-Ticket Home Services",
    headline: "957+ qualified leads at ₹45 CPL for a Solar company.",
    summary:
      "A high-ticket service provider needed a predictable sales pipeline without wasting budget. We built a hyper-local Meta Ads strategy optimized exclusively for direct messaging, allowing the sales team to connect instantly with high-intent homeowners on WhatsApp.",
    image: "/meta-ads-mockup.webp",
    metrics: [
      { value: "957+", label: "Qualified leads" },
      { value: "₹45", label: "Cost per lead" },
      { value: "40+", label: "Massive Projects Closed" },
      { value: "465K+", label: "Ad impressions" },
    ],
    highlights: [
      "Hyper-local Meta Ads targeting",
      "Direct-to-WhatsApp messaging funnel",
      "Zero-friction lead capture (No complex CRM required)",
    ],
  },
  {
    index: "02",
    category: "Web development · E-commerce",
    client: "Designer Ethnic Wear",
    headline: "High-Performance Next.js Ethnic Wear Storefront.",
    summary:
      "A premium designer ethnic wear brand needed a digital storefront that matched their luxury physical garments. We built a custom Next.js experience from the ground up-fast, minimal, and optimized for frictionless mobile checkouts.",
    image: "/ethnic-storefront-mockup.webp",
    metrics: [
      { value: "0.9s", label: "Average load time" },
      { value: "3.2×", label: "Conversion rate" },
      { value: "-48%", label: "Bounce rate" },
      { value: "+184%", label: "Revenue / visitor" },
    ],
    highlights: [
      "Custom Next.js architecture (No bloated templates)",
      "Checkout reduced from 5 steps to 2",
      "Core Web Vitals all green",
    ],
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      {/* HEADER */}
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>Case studies</Eyebrow>
          <h1 className="mt-6 text-5xl font-medium leading-[1.05] tracking-tight text-foreground md:text-6xl">
            Real work.
            <br />
            <span className="text-muted-foreground">Real numbers.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Every engagement ships with measurable outcomes. Here are two of
            our most recent - full stack, full numbers, no fluff.
          </p>
        </div>
      </Section>

      {/* CASE STUDIES - identical template, perfectly mirrored */}
      {caseStudies.map((study) => (
        <CaseStudy key={study.index} study={study} total={caseStudies.length} />
      ))}

      {/* CTA */}
      <Section className="border-b-0">
        <div className="flex flex-col items-center text-center">
          <Eyebrow>Your turn</Eyebrow>
          <h2 className="mt-6 max-w-2xl text-4xl font-medium tracking-tight text-foreground md:text-5xl">
            Let&apos;s put your name on the next one.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
            10-minute audit call. We&apos;ll show you exactly where the
            revenue is leaking - and how to fix it.
          </p>
          <a
            href="https://wa.me/917022715411"
            className="group mt-10 inline-flex items-center gap-1.5 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Book a call
            <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </Section>
    </>
  )
}

function CaseStudy({
  study,
  total,
}: {
  study: CaseStudyData
  total: number
}) {
  return (
    <Section>
      <div className="flex items-center justify-between gap-6">
        <span className="font-mono text-xs tracking-tight text-muted-foreground">
          {study.index} / {String(total).padStart(2, "0")}
        </span>
        <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
          {study.category}
        </span>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-2 md:items-start">
        {/* Left: copy */}
        <div>
          <p className="text-sm text-muted-foreground">{study.client}</p>
          <h2 className="mt-3 text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            {study.headline}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            {study.summary}
          </p>

          <ul className="mt-8 flex flex-col gap-3 border-t border-border pt-6">
            {study.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-3 text-sm text-foreground"
              >
                <span
                  aria-hidden
                  className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-foreground/70"
                />
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: image */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-card">
          <Image
            src={study.image}
            alt={`${study.client} case study visual`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-contain"
          />
        </div>
      </div>

      {/* Metrics - 4 equal tiles */}
      <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-4">
        {study.metrics.map((m) => (
          <div
            key={m.label}
            className="flex flex-col gap-2 bg-background p-6 md:p-8"
          >
            <span className="font-mono text-3xl font-medium tracking-tight text-foreground md:text-4xl">
              {m.value}
            </span>
            <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
              {m.label}
            </span>
          </div>
        ))}
      </div>
    </Section>
  )
}
