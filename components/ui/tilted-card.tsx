"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface TiltedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  tiltAmount?: number
  perspective?: number
}

export function TiltedCard({ className, children, tiltAmount = 10, perspective = 1000, ...props }: TiltedCardProps) {
  const cardRef = React.useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = React.useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = React.useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const percentX = (e.clientX - centerX) / (rect.width / 2)
    const percentY = (e.clientY - centerY) / (rect.height / 2)

    setRotation({
      x: -percentY * tiltAmount,
      y: percentX * tiltAmount,
    })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotation({ x: 0, y: 0 })
  }

  const cardStyle = isHovered
    ? {
        transform: `perspective(${perspective}px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: "transform 0.2s cubic-bezier(0.33, 1, 0.68, 1)",
      }
    : {
        transform: "perspective(1000px) rotateX(0) rotateY(0)",
        transition: "transform 0.5s cubic-bezier(0.33, 1, 0.68, 1)",
      }

  return (
    <div
      ref={cardRef}
      className={cn("rounded-xl border bg-background overflow-hidden", className)}
      style={cardStyle}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </div>
  )
}
