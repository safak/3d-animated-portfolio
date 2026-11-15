"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"

export interface LogoItem {
  /** The label text displayed next to the icon */
  label: string
  /** The icon name from the Icons object (e.g., "gitHub", "react", "tailwind") */
  icon: React.ReactNode
  /** Animation delay in seconds (use negative values for staggered effect) */
  animationDelay: number
  /** Animation duration in seconds */
  animationDuration: number
  /** The row number where this logo should appear (1-based) */
  row: number
  /** Whether this logo should be highlighted visually */
  highlighted?: boolean
}

export interface LogoTimelineProps {
  /** Array of logo items to display */
  items: LogoItem[]
  /** Optional title text to display in the center */
  title?: string
  /** Height of the timeline container */
  height?: string
  /** Additional className for the container */
  className?: string
  /** Icon size in pixels (default: 16) */
  iconSize?: number
  /** Whether to show separator lines between rows (default: true) */
  showRowSeparator?: boolean
  /** Whether to animate logos only on hover (default: false) */
  animateOnHover?: boolean
  highlighted?: boolean
}

export function LogoTimeline({
  items,
  title,
  height = "h-[400px] sm:h-[800px]",
  className,
  iconSize = 16,
  showRowSeparator = true,
  animateOnHover = false,
}: LogoTimelineProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Group items by row
  const rowsMap = new Map<number, LogoItem[]>()
  items.forEach((item) => {
    if (!rowsMap.has(item.row)) {
      rowsMap.set(item.row, [])
    }
    rowsMap.get(item.row)?.push(item)
  })

  // Convert map to sorted array
  const rows = Array.from(rowsMap.entries())
    .sort(([a], [b]) => a - b)
    .map(([, rowItems]) => rowItems)

  // Determine animation play state
  const animationPlayState = animateOnHover
    ? isHovered
      ? "running"
      : "paused"
    : "running"

  return (
    <section className={cn("w-full", height, className)}>
      <motion.div
        aria-hidden="true"
        className="bg-background relative h-full w-full overflow-hidden py-24 ring-inset sm:py-32"
        onMouseEnter={() => animateOnHover && setIsHovered(true)}
        onMouseLeave={() => animateOnHover && setIsHovered(false)}
      >
        {title && (
          <div className="absolute top-1/2 left-1/2 mx-auto w-full max-w-[90%] -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="relative z-10">
              <p className="text-foreground/10 mx-auto mt-2 max-w-3xl text-4xl font-semibold tracking-tight text-pretty sm:text-5xl md:text-6xl">
                {title}
              </p>
            </div>
          </div>
        )}
        <div
          className="@container absolute inset-0 grid"
          style={{ gridTemplateRows: `repeat(${rows.length}, 1fr)` }}
        >
          {rows.map((rowItems, index) => (
            <div className="group relative flex items-center" key={index}>
              <div className="from-foreground/15 dark:from-foreground/15 absolute inset-x-0 top-1/2 h-0.5 bg-linear-to-r from-[2px] to-[2px] bg-size-[12px_100%]" />
              {showRowSeparator && (
                <div className="from-foreground/5 dark:from-foreground/5 absolute inset-x-0 bottom-0 h-0.5 bg-linear-to-r from-[2px] to-[2px] bg-size-[12px_100%] group-last:hidden" />
              )}
              {rowItems.map((logo) => {
                return (
                  <div
                    key={`${logo.row}-${logo.label}`}
                    className={cn(
                      "absolute left-0 top-1/2 flex w-max -translate-y-1/2 flex-row flex-nowrap items-center gap-2 whitespace-nowrap rounded-full border border-white/0 bg-neutral-900/90 px-3 py-1.5 text-white backdrop-blur-sm",
                      logo.highlighted &&
                        "bg-[#FFC6D0]/20 shadow-[0_0_18px_rgba(255,198,208,0.7)]"
                    )}
                    style={{
                      animationName: "move-x",
                      animationTimingFunction: "linear",
                      animationIterationCount: "infinite",
                      animationDelay: `${logo.animationDelay}s`,
                      animationDuration: `${logo.animationDuration}s`,
                      animationPlayState,
                    }}

                  >
                    {logo.icon}
                    <span className="shrink-0 whitespace-nowrap text-sm/6 font-medium">
                      {logo.label}
                    </span>
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
