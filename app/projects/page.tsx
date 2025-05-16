import { TiltedCard } from "@/components/ui/tilted-card"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { TextReveal } from "@/components/ui/text-reveal"
import { MagnetButton } from "@/components/ui/magnet-button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function ProjectsPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-blue-100 to-white">
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            src="/c1.mp4"
            poster="/placeholder.svg?height=600&width=1200"
          />
          <div className="absolute inset-0 bg-blue-900/10 backdrop-blur-sm"></div>
        </div>
        <div className="container relative z-10 px-4 md:px-6 py-12 md:py-24">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
              <TextReveal text="Our Projects" type="chars" />
            </h1>
            <ScrollReveal variant="fade" delay={0.5}>
              <p className="max-w-[700px] text-white md:text-xl">
                Explore our portfolio of successful projects that showcase our expertise and innovation.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 section-container bg-white">
        <div className="container px-4 md:px-6 relative z-10">
          <ScrollReveal staggerChildren staggerDelay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {projects.map((project, index) => (
                <TiltedCard
                  key={index}
                  className="border border-gray-100 bg-white shadow-sm group h-full"
                  tiltAmount={5}
                >
                  <div className="relative h-[250px] w-full rounded-t-xl overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className={`bg-${tagColors[i % tagColors.length]}-100 text-${tagColors[i % tagColors.length]}-600 text-xs px-2 py-1 rounded-full`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-primary font-medium inline-flex items-center hover:underline"
                    >
                      View Case Study{" "}
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </TiltedCard>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Call for Internship */}
      <section className="py-24 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              <TextReveal text="Join Our Internship Program" type="chars" />
            </h2>
            <ScrollReveal variant="fade" delay={0.3}>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Gain hands-on experience and kickstart your career in web development and digital marketing.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal variant="zoom" delay={0.2}>
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-md max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Why Join Us?</h3>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-600">Work on real client projects</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-600">Learn from experienced professionals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-600">Develop technical and soft skills</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-600">Build your professional portfolio</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-600">Opportunity for full-time employment</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Available Positions</h3>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-600">Web Development Intern</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-600">Digital Marketing Intern</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-600">UI/UX Design Intern</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-600">Content Writing Intern</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-center mt-6">
                <MagnetButton asChild>
                  <Link
                    href="/internship"
                    className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </MagnetButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

const tagColors = ["blue", "indigo", "red", "amber", "emerald", "purple"]

const projects = [
  {
    title: "Restaurant Website",
    description: "A modern, responsive website for a local restaurant with online ordering capabilities.",
    image: "/placeholder.svg?height=250&width=400",
    slug: "restaurant-website",
    tags: ["Web Development", "UI/UX"],
  },
  {
    title: "Warahi Joshi Sanstha",
    description: "Comprehensive digital marketing strategy and website for a non-profit organization.",
    image: "/placeholder.svg?height=250&width=400",
    slug: "warahi-joshi-sanstha",
    tags: ["Digital Marketing", "Web Development"],
  },
  {
    title: "Conference Website",
    description: "Website and digital marketing campaign for a major industry conference.",
    image: "/placeholder.svg?height=250&width=400",
    slug: "conference-website",
    tags: ["Web Development", "Digital Marketing"],
  },
]
