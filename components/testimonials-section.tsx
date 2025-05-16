"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TextReveal } from "@/components/ui/text-reveal"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Parallax } from "@/components/ui/parallax"
import Image from "next/image"

// Register the ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface Testimonial {
  name: string
  role: string
  company: string
  avatar: string
  quote: string
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return

    // Set initial clip-path to rectangle
    gsap.set(section, {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    })

    // Create the animation
    const animation = gsap.to(section, {
      clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "top 30%",
        scrub: true,
      },
    })

    // Clean up
    return () => {
      animation.kill()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-blue-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
            <TextReveal text="Client Testimonials" type="chars" />
          </h2>
          <ScrollReveal variant="fade" delay={0.3}>
            <p className="text-gray-600 max-w-2xl mx-auto">Hear what our clients have to say about working with us.</p>
          </ScrollReveal>
        </div>

        <ScrollReveal staggerChildren staggerDelay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Parallax key={index} speed={0.1} direction={index % 2 === 0 ? "left" : "right"} offset={10}>
                <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-gray-300 transition-colors shadow-sm h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="italic text-gray-700">"{testimonial.quote}"</p>
                </div>
              </Parallax>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
