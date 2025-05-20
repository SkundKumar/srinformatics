// This page is temporarily disabled
import { MagnetButton } from "@/components/ui/magnet-button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { TextReveal } from "@/components/ui/text-reveal"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import Link from "next/link"
import { ArrowRight, Briefcase, GraduationCap } from "lucide-react"

export default function CareersPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="container px-4 md:px-6 py-24">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">This page is temporarily unavailable</h1>
          <p className="text-gray-600 mb-8">Please check back later for career opportunities.</p>
          <MagnetButton asChild>
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Return to Home
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </MagnetButton>
        </div>
      </div>
    </div>
  )
}

const benefits = [
  {
    title: "Professional Growth",
    description:
      "We invest in our team's development through training, workshops, and opportunities to work on diverse projects.",
  },
  {
    title: "Collaborative Environment",
    description: "Work in a supportive team environment where ideas are valued and collaboration is encouraged.",
  },
  {
    title: "Work-Life Balance",
    description:
      "We believe in maintaining a healthy work-life balance to ensure our team members can perform at their best.",
  },
  {
    title: "Innovative Projects",
    description:
      "Work on cutting-edge projects across various industries, using the latest technologies and methodologies.",
  },
  {
    title: "Career Advancement",
    description:
      "Clear paths for career progression and opportunities to take on leadership roles as you grow with us.",
  },
  {
    title: "Inclusive Culture",
    description:
      "We foster a diverse and inclusive workplace where everyone's contributions are recognized and valued.",
  },
]
