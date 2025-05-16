"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ProgressBarProps {
  value: number
  max?: number
  label?: string
  showValue?: boolean
  valueFormat?: (value: number) => string
  className?: string
  barClassName?: string
  labelClassName?: string
  valueClassName?: string
  duration?: number
  delay?: number
}

export function ProgressBar({
  value,
  max = 100,
  label,
  showValue = true,
  valueFormat = (v) => `${v}%`,
  className = "",
  barClassName = "",
  labelClassName = "",
  valueClassName = "",
  duration = 1.5,
  delay = 0.2,
}: ProgressBarProps) {
  const [progress, setProgress] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      setProgress(value)
    }
  }, [inView, value])

  const percentage = (progress / max) * 100

  return (
    <div ref={ref} className={cn("space-y-2", className)}>
      <div className="flex justify-between items-center">
        {label && <div className={cn("text-sm font-medium text-gray-700", labelClassName)}>{label}</div>}
        {showValue && (
          <div className={cn("text-sm font-medium text-gray-700", valueClassName)}>
            {valueFormat(inView ? progress : 0)}
          </div>
        )}
      </div>
      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          className={cn("h-full rounded-full", barClassName)}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${percentage}%` : 0 }}
          transition={{ duration, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}
