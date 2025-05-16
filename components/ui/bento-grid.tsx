import type * as React from "react"
import { cn } from "@/lib/utils"

export interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export interface BentoGridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  description?: string
  header?: React.ReactNode
  className?: string
  children?: React.ReactNode
}

export function BentoGrid({ children, className, ...props }: BentoGridProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", className)} {...props}>
      {children}
    </div>
  )
}

export function BentoGridItem({ title, description, header, className, children, ...props }: BentoGridItemProps) {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-border",
        className,
      )}
      {...props}
    >
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {header}
        <div className="mt-4">
          {title && <h3 className="font-bold text-xl">{title}</h3>}
          {description && <p className="text-sm text-muted-foreground mt-2">{description}</p>}
        </div>
        {children}
      </div>
    </div>
  )
}
