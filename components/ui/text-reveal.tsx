"use client"

import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface TextRevealProps {
  text: string
  className?: string
  charClassName?: string
  wordClassName?: string
  type?: "chars" | "words"
  staggerDelay?: number
  duration?: number
  threshold?: number
  once?: boolean
}

export function TextReveal({
  text,
  className = "",
  charClassName = "",
  wordClassName = "",
  type = "chars",
  staggerDelay = 0.03,
  duration = 0.5,
  threshold = 0.1,
  once = true,
}: TextRevealProps) {
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

  const renderChars = () => {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: {
            transition: {
              staggerChildren: staggerDelay,
            },
          },
        }}
        className={` ${className}`}
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={`char-${index}`}
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration,
                  ease: [0.2, 0.65, 0.3, 0.9],
                },
              },
            }}
            className={`inline-block ${char === " " ? "mr-[0.25em]" : ""} pb-[2px] ${charClassName}`}
            aria-hidden="true"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>
    )
  }

  const renderWords = () => {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: {
            transition: {
              staggerChildren: staggerDelay * 5,
            },
          },
        }}
        className={`leading-relaxed ${className}`}
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={`word-${index}`}
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration,
                  ease: [0.2, 0.65, 0.3, 0.9],
                },
              },
            }}
            className={`inline-block mr-[0.25em] pb-1 ${wordClassName}`}
            aria-hidden="true"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    )
  }

  return type === "chars" ? renderChars() : renderWords()
}
