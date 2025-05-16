import { MagnetButton } from "@/components/ui/magnet-button"
import { Parallax } from "@/components/ui/parallax"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { TextReveal } from "@/components/ui/text-reveal"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Heart, Lightbulb, Target, Users } from "lucide-react"

export default function AboutPage() {
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
            src="/c4.mp4"
            poster="/c2.mp4"
          />
          <div className="absolute inset-0 bg-blue-900/10 "></div>
        </div>
        <div className="container relative z-10 px-4 md:px-6 py-12 md:py-24">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
              <TextReveal text="About SR Informatics" type="chars" />
            </h1>
            <ScrollReveal variant="fade" delay={0.5}>
              <p className="max-w-[700px] text-white md:text-xl">
                We're a team of passionate digital experts dedicated to helping businesses thrive in the digital
                landscape.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 section-container bg-white">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <ScrollReveal variant="slide-right">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                <TextReveal text="Our Story" type="chars" />
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  SR Informatics began with a vision to help businesses navigate the complex digital landscape. What
                  started as a small team of digital enthusiasts has grown into a full-service digital agency serving
                  clients across industries.
                </p>
                <p>
                  Our journey has been defined by innovation, adaptation, and a relentless commitment to delivering
                  value to our clients. We've evolved alongside the rapidly changing digital landscape, continuously
                  expanding our expertise to meet the diverse needs of businesses.
                </p>
                <p>
                  Today, SR Informatics is recognized for our strategic approach, technical excellence, and dedication
                  to client success. We take pride in being a trusted digital partner that helps businesses transform
                  their online presence and achieve meaningful results.
                </p>
              </div>
            </ScrollReveal>
            <Parallax speed={0.1} direction="right" offset={10}>
              <ScrollReveal variant="slide-left">
                <div className="relative h-[400px] rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="SR Informatics team"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>
            </Parallax>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <ScrollReveal variant="slide-right">
              <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm h-full">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
                <p className="text-gray-600">
                  To empower businesses with innovative digital solutions that drive growth, enhance visibility, and
                  create meaningful connections with their audience.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="slide-left">
              <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm h-full">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Vision</h3>
                <p className="text-gray-600">
                  To be recognized as a leading digital partner that transforms businesses through technology and
                  creativity, setting new standards in the digital industry.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 section-container bg-white">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              <TextReveal text="Our Core Values" type="chars" />
            </h2>
            <ScrollReveal variant="fade" delay={0.3}>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These principles guide everything we do and shape how we work with our clients and each other.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal staggerChildren staggerDelay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-8 group hover:border-gray-300 hover:shadow-md transition-all duration-300 h-full"
                >
                  <div
                    className={`bg-${value.color}-100 p-3 rounded-full w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Developers Section */}
      <section className="py-24 section-container alt bg-blue-50">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              <TextReveal text="Our Developers" type="chars" />
            </h2>
            <ScrollReveal variant="fade" delay={0.3}>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Meet our talented team of developers who bring innovation and expertise to every project.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal staggerChildren staggerDelay={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {developers.map((member, index) => (
                <Parallax
                  key={index}
                  className="group"
                  speed={0.1}
                  direction={index % 2 === 0 ? "left" : "right"}
                  offset={5}
                >
                  <div className="relative h-[300px] rounded-xl overflow-hidden mb-4 border border-gray-100 shadow-sm">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div>
                        <p className="text-sm text-white">{member.bio}</p>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-primary">{member.role}</p>
                </Parallax>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Interns Section */}
      <section className="py-24 section-container bg-white">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              <TextReveal text="Our Interns" type="chars" />
            </h2>
            <ScrollReveal variant="fade" delay={0.3}>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our talented interns are the future of digital innovation, bringing fresh perspectives and energy.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal staggerChildren staggerDelay={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {interns.map((member, index) => (
                <Parallax
                  key={index}
                  className="group"
                  speed={0.1}
                  direction={index % 2 === 0 ? "left" : "right"}
                  offset={5}
                >
                  <div className="relative h-[300px] rounded-xl overflow-hidden mb-4 border border-gray-100 shadow-sm">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div>
                        <p className="text-sm text-white">{member.bio}</p>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-primary">{member.role}</p>
                </Parallax>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-50">
        <div className="container px-4 md:px-6">
          <ScrollReveal variant="zoom">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
                <TextReveal text="Ready to Work With Us?" type="words" />
              </h2>
              <p className="text-gray-600 mb-8">
                Contact us today to discuss your project and discover how our digital expertise can help your business
                grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagnetButton asChild>
                  <Link
                    href="/contact"
                    className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </MagnetButton>
                <MagnetButton asChild variant="outline">
                  <Link
                    href="/services"
                    className="inline-flex h-11 items-center justify-center rounded-md border border-gray-300 bg-white px-8 text-base font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Our Services
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

const values = [
  {
    title: "Innovation",
    description: "We continuously explore new technologies and methodologies to provide cutting-edge solutions.",
    icon: <Lightbulb className="h-6 w-6 text-blue-600" />,
    color: "blue",
  },
  {
    title: "Excellence",
    description:
      "We maintain the highest standards in everything we do, from client communication to project delivery.",
    icon: <Award className="h-6 w-6 text-indigo-600" />,
    color: "indigo",
  },
  {
    title: "Integrity",
    description: "We operate with transparency and honesty, building trust-based relationships with our clients.",
    icon: <Heart className="h-6 w-6 text-red-600" />,
    color: "red",
  },
  {
    title: "Collaboration",
    description: "We believe in the power of teamwork and partner closely with our clients to achieve shared goals.",
    icon: <Users className="h-6 w-6 text-amber-600" />,
    color: "amber",
  },
  {
    title: "Growth Mindset",
    description:
      "We embrace challenges as opportunities to learn and improve, both as individuals and as an organization.",
    icon: <Target className="h-6 w-6 text-emerald-600" />,
    color: "emerald",
  },
]

const developers = [
  {
    name: "Developer 1",
    role: "Lead Developer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Full-stack developer specializing in creating responsive, user-friendly websites and applications.",
  },
  {
    name: "Developer 2",
    role: "Frontend Developer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Frontend specialist with expertise in creating engaging user interfaces and experiences.",
  },
  {
    name: "Developer 3",
    role: "Backend Developer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Backend expert focused on building robust, scalable server-side applications.",
  },
  {
    name: "Developer 4",
    role: "UI/UX Designer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Creative designer focused on creating intuitive, engaging user experiences.",
  },
]

const interns = [
  {
    name: "Intern 1",
    role: "Web Development Intern",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Learning full-stack development with a focus on modern JavaScript frameworks.",
  },
  {
    name: "Intern 2",
    role: "Digital Marketing Intern",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Gaining hands-on experience in social media management and content creation.",
  },
  {
    name: "Intern 3",
    role: "UI/UX Design Intern",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Developing skills in user interface design and user experience research.",
  },
  {
    name: "Intern 4",
    role: "Content Writing Intern",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Creating engaging content for websites, blogs, and social media platforms.",
  },
]
