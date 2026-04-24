import Image from "next/image"
import { HeroVisual } from "@/components/hero-visual"
import { IndustryMarquee } from "@/components/industry-marquee"
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  Code2Icon,
  TargetIcon,
} from "@/components/icons"

// ─── Shared primitives (same on every page for strict consistency) ───────────

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
        className="inline-block h-1 w-1 rounded-full bg-foreground/70 animate-pulse-dot"
      />
      {children}
    </div>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* HERO - headline + product-style dashboard visual */}
      <section className="relative overflow-hidden border-b border-border">
        {/* grid background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(245,242,234,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,242,234,0.04)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center_top,black_40%,transparent_75%)]"
        />

        <div className="relative mx-auto w-full max-w-6xl px-6 pt-24 pb-20 lg:pt-28 lg:pb-24">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground animate-pulse-dot" />
              Now booking · Q2 2026
            </div>

            <h1 className="mt-8 max-w-4xl text-5xl font-medium leading-[1.02] tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Websites that convert.
              <br />
              <span className="text-muted-foreground">
                Ads that deliver.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              A performance studio building custom storefronts and Meta ad
              systems for clinics, studios, and e-commerce operators.
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

          {/* product dashboard visual */}
          <div className="relative mt-20">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* MARQUEE - industries we serve */}
      <IndustryMarquee />

      {/* SERVICES - two mirrored bento cards, each with visual content */}
      <Section id="services">
        <div className="flex items-end justify-between gap-6">
          <div>
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground md:text-4xl">
              Two services. Both engineered for revenue.
            </h2>
          </div>
          <a
            href="/services"
            className="hidden shrink-0 items-center gap-1 text-sm text-muted-foreground hover:text-foreground md:inline-flex"
          >
            All services <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="group overflow-hidden rounded-xl border border-border bg-background transition-colors hover:bg-card">
            <ServiceCard
              index="01"
              icon={<Code2Icon className="h-4 w-4" />}
              title="Web development"
              summary="Custom-coded storefronts and marketing sites on Next.js. Fast, secure, SEO-ready."
              points={[
                "E-commerce storefronts",
                "Marketing & brand sites",
                "Landing pages for ads",
                "Payments & CMS integration",
              ]}
              visual={<CodeVisual />}
            />
          </div>
          <div className="group overflow-hidden rounded-xl border border-border bg-background transition-colors hover:bg-card">
            <ServiceCard
              index="02"
              icon={<TargetIcon className="h-4 w-4" />}
              title="Lead generation"
              summary="Meta ad systems that deliver qualified, consultation-ready leads for clinics and studios."
              points={[
                "Meta ads (IG & FB)",
                "Landing-page funnels",
                "CRM & WhatsApp follow-up",
                "Weekly performance reporting",
              ]}
              visual={<FunnelVisual />}
            />
          </div>
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section id="contact">
        <div className="flex flex-col items-center text-center">
          <Eyebrow>Let&apos;s talk</Eyebrow>
          <h2 className="mt-6 max-w-2xl text-4xl font-medium tracking-tight text-foreground md:text-5xl">
            Ready to ship something that actually performs?
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
            Book a 10-minute call. We&apos;ll audit your current funnel and
            tell you exactly where the revenue is leaking.
          </p>
          <a
            href="https://wa.me/917022715411"
            className="group mt-10 inline-flex items-center gap-1.5 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Book a call
            <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="mailto:contact@borekar.tech"
            className="mt-6 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            contact@borekar.tech
          </a>
        </div>
      </Section>

      {/* PROOF */}
      <Section>
        <Eyebrow>The numbers</Eyebrow>
        <h2 className="mt-4 max-w-3xl text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          Proof, not promises.
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          A snapshot from a recent hyper-local lead generation campaign for a
          high-ticket service provider in Bangalore.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
          <Metric value="957+" label="Qualified leads delivered" />
          <Metric value="₹45" label="Average cost per lead" />
          <Metric value="40+" label="Massive Projects Closed" />
        </div>
      </Section>

      {/* CASE STUDY TEASER */}
      <Section className="border-b-0">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <Eyebrow>Featured case study</Eyebrow>
            <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground md:text-4xl">
              High-Performance Ethnic Wear Storefront.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We engineered a custom, lightning-fast e-commerce experience for a
              premium designer ethnic wear brand. Built from the ground up for
              maximum mobile checkout conversion.
            </p>

            <dl className="mt-8 grid grid-cols-3 gap-6">
              <Stat label="Load time" value="0.9s" />
              <Stat label="Architecture" value="Next.js" />
              <Stat label="Checkout UI" value="2 step" />
            </dl>

            <a
              href="/case-studies"
              className="mt-10 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-muted-foreground"
            >
              Read the case study
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-card">
            <Image
              src="/ethnic-wear-mockup.webp"
              alt="Ethnic Wear UI Mockup - sleek geometric wireframe"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-contain"
            />
          </div>
        </div>
      </Section>
    </>
  )
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function ServiceCard({
  index,
  icon,
  title,
  summary,
  points,
  visual,
}: {
  index: string
  icon: React.ReactNode
  title: string
  summary: string
  points: string[]
  visual: React.ReactNode
}) {
  return (
    <div className="flex h-full flex-col gap-6 p-8 md:p-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-border text-foreground">
            {icon}
          </span>
          <span className="font-mono text-xs tracking-tight text-muted-foreground">
            {index}
          </span>
        </div>
        <ArrowUpRightIcon className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
      </div>

      {/* service visual */}
      <div className="h-[220px] overflow-hidden rounded-lg border border-border bg-card/50">
        {visual}
      </div>

      <div>
        <h3 className="text-xl font-medium tracking-tight text-foreground">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {summary}
        </p>
      </div>
      <ul className="mt-auto flex flex-col gap-2 border-t border-border pt-6">
        {points.map((p) => (
          <li
            key={p}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <span
              aria-hidden
              className="inline-block h-1 w-1 rounded-full bg-muted-foreground"
            />
            {p}
          </li>
        ))}
      </ul>
    </div>
  )
}

// Visual for "Web development" - styled code snippet.
function CodeVisual() {
  return (
    <div className="h-full px-5 py-4 font-mono text-[11px] leading-relaxed">
      <div className="flex items-center gap-2 pb-3 text-muted-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-border" />
        <span className="h-1.5 w-1.5 rounded-full bg-border" />
        <span className="h-1.5 w-1.5 rounded-full bg-border" />
        <span className="ml-2 text-[10px] uppercase tracking-[0.18em]">
          page.tsx
        </span>
      </div>
      <div className="space-y-1">
        <div>
          <span className="text-muted-foreground">export default</span>{" "}
          <span className="text-foreground">async function</span>{" "}
          <span className="text-foreground">Page</span>
          <span className="text-muted-foreground">() {"{"}</span>
        </div>
        <div className="pl-4">
          <span className="text-muted-foreground">const</span> products{" "}
          <span className="text-muted-foreground">= await</span>{" "}
          <span className="text-foreground">getProducts</span>
          <span className="text-muted-foreground">()</span>
        </div>
        <div className="pl-4 text-muted-foreground">
          <span className="text-foreground/60">// cached + revalidated</span>
        </div>
        <div className="pl-4">
          <span className="text-muted-foreground">return</span>{" "}
          <span className="text-foreground">&lt;Storefront</span>{" "}
          products={"{"}products{"}"} <span className="text-foreground">/&gt;</span>
        </div>
        <div>
          <span className="text-muted-foreground">{"}"}</span>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        <span>Lighthouse</span>
        <span className="font-mono text-foreground">100 / 100</span>
      </div>
    </div>
  )
}

// Visual for "Lead generation" - funnel breakdown.
function FunnelVisual() {
  const steps = [
    { label: "Impressions", value: "465K", width: "100%" },
    { label: "Clicks", value: "12.4K", width: "72%" },
    { label: "Form starts", value: "1,820", width: "44%" },
    { label: "Qualified leads", value: "957+", width: "26%" },
  ]
  return (
    <div className="h-full space-y-2.5 px-5 py-5">
      {steps.map((s, i) => (
        <div key={s.label} className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            <span>{s.label}</span>
            <span className="text-foreground">{s.value}</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-border">
            <div
              className="animate-grow-bar-x h-full rounded-full bg-foreground/80"
              style={{
                width: s.width,
                animationDelay: `${i * 120}ms`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="group relative flex flex-col gap-2 bg-background p-8 transition-colors hover:bg-card md:p-10">
      <span className="font-mono text-5xl font-medium tracking-tight text-foreground md:text-6xl">
        {value}
      </span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1">
      <dt className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
        {label}
      </dt>
      <dd className="font-mono text-2xl font-medium tracking-tight text-foreground">
        {value}
      </dd>
    </div>
  )
}
