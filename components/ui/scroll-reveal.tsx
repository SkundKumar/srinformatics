"use client"

import React from "react"

import { useRef, useEffect, type ReactNode } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

type AnimationVariant = "fade" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "zoom" | "flip" | "rotate"

interface ScrollRevealProps {
  children: ReactNode
  variant?: AnimationVariant
  delay?: number
  duration?: number
  className?: string
  threshold?: number
  once?: boolean
  staggerChildren?: boolean
  staggerDelay?: number
}

const variants = {
  hidden: {
    fade: { opacity: 0 },
    "slide-up": { opacity: 0, y: 50 },
    "slide-down": { opacity: 0, y: -50 },
    "slide-left": { opacity: 0, x: 50 },
    "slide-right": { opacity: 0, x: -50 },
    zoom: { opacity: 0, scale: 0.9 },
    flip: { opacity: 0, rotateX: 90 },
    rotate: { opacity: 0, rotate: -15 },
  },
  visible: {
    fade: { opacity: 1 },
    "slide-up": { opacity: 1, y: 0 },
    "slide-down": { opacity: 1, y: 0 },
    "slide-left": { opacity: 1, x: 0 },
    "slide-right": { opacity: 1, x: 0 },
    zoom: { opacity: 1, scale: 1 },
    flip: { opacity: 1, rotateX: 0 },
    rotate: { opacity: 1, rotate: 0 },
  },
}

export function ScrollReveal({
  children,
  variant = "fade",
  delay = 0,
  duration = 0.5,
  className = "",
  threshold = 0.1,
  once = true,
  staggerChildren = false,
  staggerDelay = 0.1,
}: ScrollRevealProps) {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { threshold, once })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else if (!once) {
      controls.start("hidden")
    }
  }, [controls, inView, once])

  const childVariants = staggerChildren
    ? {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }
    : {}

  const itemVariants = staggerChildren
    ? {
        hidden: { ...variants.hidden[variant] },
        visible: { ...variants.visible[variant] },
      }
    : {}

  const Wrapper = staggerChildren ? motion.div : motion.div
  const Item = staggerChildren ? motion.div : "div"

  return (
    <Wrapper
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={staggerChildren ? childVariants : variants.hidden[variant]}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {staggerChildren
        ? React.Children.map(children, (child, i) => (
            <Item
              key={i}
              variants={itemVariants}
              transition={{ duration, ease: "easeOut" }}
              className="scroll-reveal-item"
            >
              {child}
            </Item>
          ))
        : children}
    </Wrapper>
  )
}
