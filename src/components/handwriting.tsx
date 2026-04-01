'use client'

import { useEffect, useState } from 'react'
import {
  type Easing,
  motion,
  type SVGMotionProps,
  type Variants,
} from 'motion/react'
import { cn } from '@/lib/utils'

// Names of SVG files in public/signatures/ (without .svg) — add new files here to make them selectable
export const SIGNATURE_OPTIONS = [
  'hanif',
  'hanif (1)',
  'hanif (2)',
  'hanif (3)',
] as const

export type SignatureOption = (typeof SIGNATURE_OPTIONS)[number]

const PATH_DURATION = 0.5
const PATH_STAGGER_DELAY = 0.2
const PATH_EASING: Easing = [0.4, 0, 0.2, 1]

interface ParsedSignature {
  viewBox: string
  paths: string[]
}

function parseSignatureSvg(svgText: string): ParsedSignature | null {
  if (typeof document === 'undefined') return null
  const parser = new DOMParser()
  const doc = parser.parseFromString(svgText, 'image/svg+xml')
  const svg = doc.querySelector('svg')
  if (!svg) return null
  const viewBox = svg.getAttribute('viewBox') ?? '0 0 400 150'
  const pathElements = doc.querySelectorAll('path')
  const paths = Array.from(pathElements).map((p) => p.getAttribute('d')).filter(Boolean) as string[]
  if (paths.length === 0) return null
  return { viewBox, paths }
}

async function fetchSignature(name: SignatureOption): Promise<ParsedSignature | null> {
  const url = `/signatures/${encodeURIComponent(name)}.svg`
  const res = await fetch(url)
  if (!res.ok) return null
  const text = await res.text()
  return parseSignatureSvg(text)
}

const container: Variants = {
  initial: {},
  animate: {},
}

function createDrawVariant(index: number): Variants {
  const delay = index * PATH_STAGGER_DELAY
  return {
    initial: {
      opacity: 0,
      pathLength: 0.01,
    },
    animate: {
      opacity: 1,
      pathLength: 1,
      transition: {
        opacity: {
          duration: 0.01,
          delay,
        },
        pathLength: {
          ease: PATH_EASING,
          duration: PATH_DURATION,
          delay,
        },
      },
    },
  }
}

export type SignatureProps = SVGMotionProps<SVGSVGElement> & {
  /** Which signature from public/signatures/ to load. Defaults to first option. */
  signature?: SignatureOption
  /** Display inline with text (e.g. inside an h1). Uses 1em height to match line height. */
  inline?: boolean
  /** CSS height for the signature (e.g. "1em", "2rem", "28px"). Overrides inline height when set. */
  size?: string
}

const inlineSizeClass = 'inline-block h-[1em] w-auto min-w-0 align-baseline shrink-0'

export const Signature = ({
  className,
  signature = SIGNATURE_OPTIONS[0],
  inline = false,
  size,
  style,
  ...props
}: SignatureProps) => {
  const [data, setData] = useState<ParsedSignature | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const sizeClass = inline && !size ? inlineSizeClass : ''
  const sizeStylePlain =
    size
      ? { height: size, width: 'auto' as const, display: 'inline-block' as const, verticalAlign: 'baseline' as const }
      : undefined

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(false)
    fetchSignature(signature)
      .then((parsed) => {
        if (!cancelled) {
          setData(parsed)
          if (!parsed) setError(true)
        }
      })
      .catch(() => {
        if (!cancelled) setError(true)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [signature])

  if (loading) {
    return (
      <span
        className={cn(
          sizeClass ? `${sizeClass} min-w-[3rem] animate-pulse rounded bg-gray-200 dark:bg-gray-700` : 'h-8 w-32 block animate-pulse rounded bg-gray-200 dark:bg-gray-700',
          className
        )}
        style={sizeStylePlain}
        aria-hidden
      />
    )
  }

  if (error || !data) {
    return (
      <span
        className={cn(
          'text-gray-500 dark:text-gray-400',
          sizeClass || 'text-sm',
          className
        )}
        style={sizeStylePlain}
        role="img"
        aria-label="Signature"
      >
        Hanif
      </span>
    )
  }

  const { viewBox, paths } = data
  const defaultSvgClass = sizeClass ? '' : 'h-auto w-full'

  return (
    <motion.svg
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        defaultSvgClass,
        sizeClass,
        'overflow-hidden drop-shadow-md',
        className
      )}
      style={sizeStylePlain ? { ...sizeStylePlain, ...style } : style}
      variants={container}
      initial="initial"
      animate="animate"
      {...props}
    >
      {paths.map((d, index) => (
        <motion.path
          key={index}
          d={d}
          strokeWidth="2"
          variants={createDrawVariant(index)}
        />
      ))}
      {paths.map((d, index) => (
        <motion.path
          key={`guide-${index}`}
          d={d}
          strokeWidth="2"
          opacity={0.12}
          style={{ pointerEvents: 'none' }}
        />
      ))}
    </motion.svg>
  )
}

/** Wrapper that lets you pick which signature to show via a dropdown. Use when you want dynamic selection. */
export function SignatureWithPicker({
  className,
  ...props
}: Omit<SignatureProps, 'signature'>) {
  const [selected, setSelected] = useState<SignatureOption>(SIGNATURE_OPTIONS[0])
  return (
    <div className={cn('flex flex-col gap-1', className)}>
      <Signature signature={selected} {...props} />
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value as SignatureOption)}
        className="w-fit text-xs text-gray-500 dark:text-gray-400 bg-transparent border border-gray-200 dark:border-gray-700 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-[#1DCFF6]"
        aria-label="Choose signature style"
      >
        {SIGNATURE_OPTIONS.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  )
}
