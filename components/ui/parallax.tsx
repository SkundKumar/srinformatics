"use client"

import { useRef, useEffect, useState, type ReactNode } from "react"
import { useScroll, motion, useTransform } from "framer-motion"

interface ParallaxProps {
  children: ReactNode
  speed?: number
  className?: string
  direction?: "up" | "down" | "left" | "right"
  offset?: number
}

export function Parallax({ children, speed = 0.5, className = "", direction = "up", offset = 20 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [elementTop, setElementTop] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)
  const { scrollY } = useScroll()

  // Update element position on resize and initial load
  useEffect(() => {
    const element = ref.current
    if (!element) return

    const updatePosition = () => {
      const { top } = element.getBoundingClientRect()
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      setElementTop(top + scrollTop)
      setClientHeight(window.innerHeight)
    }

    updatePosition()
    window.addEventListener("resize", updatePosition)
    return () => window.removeEventListener("resize", updatePosition)
  }, [])

  // Create transforms with more subtle movement
  const transformY = useTransform(
    scrollY,
    [elementTop - clientHeight, elementTop + 200],
    [direction === "up" ? offset : -offset, 0],
  )

  const transformX = useTransform(
    scrollY,
    [elementTop - clientHeight, elementTop + 200],
    [direction === "left" ? offset : -offset, 0],
  )

  // Only apply transform based on direction
  const transformStyle = direction === "left" || direction === "right" ? { x: transformX } : { y: transformY }

  return (
    <motion.div
      ref={ref}
      style={{
        ...transformStyle,
        transition: "transform 0.1s cubic-bezier(0.17, 0.67, 0.83, 0.67)",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
