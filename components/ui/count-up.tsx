"use client"

import { useRef, useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

interface CountUpProps {
  end: number
  start?: number
  duration?: number
  delay?: number
  decimals?: number
  prefix?: string
  suffix?: string
  separator?: string
  className?: string
}

export function CountUp({
  end,
  start = 0,
  duration = 2,
  delay = 0,
  decimals = 0,
  prefix = "",
  suffix = "",
  separator = ",",
  className = "",
}: CountUpProps) {
  const [count, setCount] = useState(start)
  const countRef = useRef<number>(start)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  useEffect(() => {
    let startTime: number
    let animationFrame: number
    let currentCount = start

    const easeOutQuad = (t: number) => t * (2 - t)

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      const easedProgress = easeOutQuad(progress)

      currentCount = start + easedProgress * (end - start)
      countRef.current = currentCount
      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount)
      }
    }

    if (inView) {
      setTimeout(() => {
        animationFrame = requestAnimationFrame(updateCount)
      }, delay * 1000)
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [inView, start, end, duration, delay])

  const formatNumber = (num: number) => {
    const fixed = num.toFixed(decimals)
    const parts = fixed.toString().split(".")
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator)
    return parts.join(".")
  }

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  )
}
