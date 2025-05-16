"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const magnetVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface MagnetButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof magnetVariants> {
  asChild?: boolean
  strength?: number
}

const MagnetButton = React.forwardRef<HTMLButtonElement, MagnetButtonProps>(
  ({ className, variant, size, asChild = false, strength = 30, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    const buttonRef = React.useRef<HTMLButtonElement>(null)
    const [position, setPosition] = React.useState({ x: 0, y: 0 })
    const [isHovered, setIsHovered] = React.useState(false)

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!buttonRef.current) return

      const rect = buttonRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const distanceX = e.clientX - centerX
      const distanceY = e.clientY - centerY

      setPosition({
        x: distanceX / strength,
        y: distanceY / strength,
      })
    }

    const handleMouseEnter = () => {
      setIsHovered(true)
    }

    const handleMouseLeave = () => {
      setIsHovered(false)
      setPosition({ x: 0, y: 0 })
    }

    const buttonStyle = isHovered
      ? {
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: "transform 0.2s cubic-bezier(0.33, 1, 0.68, 1)",
        }
      : {
          transform: "translate(0, 0)",
          transition: "transform 0.3s cubic-bezier(0.33, 1, 0.68, 1)",
        }

    return (
      <Comp
        ref={(el) => {
          // Handle both refs
          if (typeof ref === "function") ref(el)
          else if (ref) ref.current = el
          buttonRef.current = el
        }}
        className={cn(magnetVariants({ variant, size, className }))}
        style={buttonStyle}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      />
    )
  },
)
MagnetButton.displayName = "MagnetButton"

export { MagnetButton, magnetVariants }
