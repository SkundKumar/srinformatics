"use client"

import type * as React from "react"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

interface ScrollFloatTextProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  delay?: number
  duration?: number
  distance?: number
}

export function ScrollFloatText({
  className,
  children,
  delay = 0,
  duration = 0.8,
  distance = 40,
  ...props
}: ScrollFloatTextProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div ref={ref} className={cn("overflow-hidden", className)} {...props}>
      <div
        style={{
          transform: inView ? "translateY(0)" : `translateY(${distance}px)`,
          opacity: inView ? 1 : 0,
          transition: `transform ${duration}s cubic-bezier(0.33, 1, 0.68, 1) ${delay}s, opacity ${duration}s cubic-bezier(0.33, 1, 0.68, 1) ${delay}s`,
        }}
      >
        {children}
      </div>
    </div>
  )
}
