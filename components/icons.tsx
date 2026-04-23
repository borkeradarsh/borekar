import type { ReactNode, SVGProps } from "react"

type IconProps = SVGProps<SVGSVGElement>

function SvgBase({ children, ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <SvgBase {...props}>
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </SvgBase>
  )
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <SvgBase {...props}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </SvgBase>
  )
}

export function Code2Icon(props: IconProps) {
  return (
    <SvgBase {...props}>
      <path d="m18 16 4-4-4-4" />
      <path d="m6 8-4 4 4 4" />
      <path d="m14.5 4-5 16" />
    </SvgBase>
  )
}

export function TargetIcon(props: IconProps) {
  return (
    <SvgBase {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" />
    </SvgBase>
  )
}

export function UsersIcon(props: IconProps) {
  return (
    <SvgBase {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </SvgBase>
  )
}

export function TrendingUpIcon(props: IconProps) {
  return (
    <SvgBase {...props}>
      <path d="M22 7 13.5 15.5 9 11l-7 7" />
      <path d="M16 7h6v6" />
    </SvgBase>
  )
}