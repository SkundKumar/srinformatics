import { MagnetButton } from "@/components/ui/magnet-button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { TextReveal } from "@/components/ui/text-reveal"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import Link from "next/link"
import { ArrowRight, Briefcase, GraduationCap } from "lucide-react"

export default function CareersPage() {
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
            src="/c3.mp4"
            poster="/placeholder.svg?height=600&width=1200"
          />
          <div className="absolute inset-0 bg-blue-900/10 backdrop-blur-sm"></div>
        </div>
        <div className="container relative z-10 px-4 md:px-6 py-12 md:py-24">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
              <TextReveal text="Join Our Team" type="chars" />
            </h1>
            <ScrollReveal variant="fade" delay={0.5}>
              <p className="max-w-[700px] text-white md:text-xl">
                Explore career opportunities at SR Informatics and be part of our innovative team.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 section-container bg-white">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              <TextReveal text="Why Join SR Informatics" type="chars" />
            </h2>
            <ScrollReveal variant="fade" delay={0.3}>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We offer a dynamic work environment where innovation and growth are encouraged.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal staggerChildren staggerDelay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-8 group hover:border-gray-300 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 mb-4">{benefit.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-24 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              <TextReveal text="Current Openings" type="chars" />
            </h2>
            <ScrollReveal variant="fade" delay={0.3}>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore our current job opportunities and find the perfect role for your skills and experience.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal staggerChildren staggerDelay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <SpotlightCard className="border border-gray-200 bg-white p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Briefcase className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Full-Stack Developer</h3>
                    <p className="text-gray-500">Full-time • Remote</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  We're looking for an experienced full-stack developer to join our team and help build innovative web
                  applications for our clients.
                </p>
                <MagnetButton asChild variant="outline" className="w-full">
                  <Link href="/careers/full-stack-developer">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </MagnetButton>
              </SpotlightCard>

              <SpotlightCard className="border border-gray-200 bg-white p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-indigo-100 p-3 rounded-full">
                    <Briefcase className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Digital Marketing Specialist</h3>
                    <p className="text-gray-500">Full-time • Hybrid</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Join our marketing team to develop and implement digital marketing strategies that drive results for
                  our clients.
                </p>
                <MagnetButton asChild variant="outline" className="w-full">
                  <Link href="/careers/digital-marketing-specialist">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </MagnetButton>
              </SpotlightCard>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Internship Program */}
      <section className="py-24 section-container alt bg-white">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <ScrollReveal variant="slide-right">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Internship Program</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Our internship program offers students and recent graduates the opportunity to gain hands-on
                  experience in web development, digital marketing, and design.
                </p>
                <p>
                  As an intern at SR Informatics, you'll work on real client projects, receive mentorship from
                  experienced professionals, and develop both technical and soft skills essential for success in the
                  digital industry.
                </p>
                <div className="pt-4">
                  <MagnetButton asChild>
                    <Link href="/internship">
                      Learn More About Our Internship Program
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </MagnetButton>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="slide-left">
              <div className="bg-blue-50 rounded-xl p-8 border border-blue-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <GraduationCap className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Available Internship Positions</h3>
                  </div>
                </div>
                <ul className="space-y-3">
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
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-50">
        <div className="container px-4 md:px-6">
          <ScrollReveal variant="zoom">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
                <TextReveal text="Ready to Apply?" type="words" />
              </h2>
              <p className="text-gray-600 mb-8">
                Send your resume and cover letter to our team. We look forward to learning more about you!
              </p>
              <MagnetButton asChild>
                <Link
                  href="mailto:srinformatics20@gmail.com"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Email Your Application
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </MagnetButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
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
