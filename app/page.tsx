import { SpotlightCard } from "@/components/ui/spotlight-card"
import { MagnetButton } from "@/components/ui/magnet-button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { TextReveal } from "@/components/ui/text-reveal"
import Link from "next/link"
import { ArrowRight, Database, Globe, Layers, LineChart, Users, Award, Clock } from "lucide-react"

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-blue-100 to-white">
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            src="/c5.mp4"
            poster="/placeholder.svg?height=600&width=1200"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-100/60 via-transparent to-transparent"></div>
        </div>
        <div className="container relative z-10 px-1 md:px-6 py-10 md:py-10 lg:py-20">
          <div className="flex flex-col items-center text-center space-y-0">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white">
              <h1 className="mb-2 text-secondary-foreground">Transforming Businesses</h1>
              
                <h1 className="mb-10 text-secondary-foreground">Through Digital Innovation</h1>
              
            </h1>
            <ScrollReveal variant="fade" delay={0.5}>
              <p className="max-w-[700px] text-white mt-1 md:text-xl">
                SR Informatics delivers cutting-edge digital solutions that help businesses establish a powerful online
                presence. Our expert team specializes in custom web development, results-driven digital marketing, and
                nurturing future talent through our internship program.
              </p>
            </ScrollReveal>
            <ScrollReveal variant="slide-up" delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <MagnetButton asChild>
                  <Link
                    href="/contact"
                    className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Get a Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </MagnetButton>
                <MagnetButton asChild variant="outline" className="bg-white/80 hover:bg-white">
                  <Link
                    href="/services"
                    className="inline-flex h-12 items-center justify-center rounded-md border border-gray-300 px-8 text-lg font-medium shadow-sm transition-colors hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Our Services
                  </Link>
                </MagnetButton>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 section-container bg-white">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              <TextReveal text="Our Services" type="chars" />
            </h2>
            <ScrollReveal variant="fade" delay={0.3}>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We offer a comprehensive range of services to help your business thrive in the digital landscape.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal staggerChildren staggerDelay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-8 group hover:border-gray-300 hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className={`bg-gradient-to-br from-${service.color}-100 to-${service.color}-50 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    href={service.link}
                    className={`text-${service.color}-600 flex items-center mt-auto group-hover:text-${service.color}-700`}
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              <TextReveal text="Why Choose SR Informatics" type="chars" />
            </h2>
            <ScrollReveal variant="fade" delay={0.3}>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We're committed to delivering exceptional value and results for your business.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal staggerChildren staggerDelay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {whyChooseUs.map((reason, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-100 hover:border-gray-300 transition-colors shadow-sm h-full"
                >
                  <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">{reason.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 section-container alt bg-white">
        <div className="container px-4 md:px-6 relative z-10">
          <ScrollReveal variant="zoom" delay={0.2}>
            <SpotlightCard className="max-w-4xl mx-auto bg-white border-gray-200 shadow-lg">
              <div className="text-center p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  Ready to Elevate Your Digital Presence?
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                  Contact us today for a free consultation to discuss how we can help your business grow online.
                </p>
                <MagnetButton asChild>
                  <Link
                    href="/contact"
                    className="inline-flex h-12 items-center justify-center rounded-md bg-secondary px-8 text-lg font-medium text-secondary-foreground shadow transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Contact Us Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </MagnetButton>
              </div>
            </SpotlightCard>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

const services = [
  {
    title: "Digital Marketing",
    description:
      "Transform your online visibility with our data-driven digital marketing strategies. We help businesses connect with their target audience and drive measurable results.",
    icon: <LineChart className="h-8 w-8 text-blue-600" />,
    color: "blue",
    link: "/services/digital-marketing",
  },
  {
    title: "Web Development",
    description:
      "From responsive websites to complex web applications, our development team creates tailored digital solutions that align with your business objectives.",
    icon: <Globe className="h-8 w-8 text-indigo-600" />,
    color: "indigo",
    link: "/services/web-development",
  },
  {
    title: "IT Services",
    description:
      "Enhance your business operations with our specialized IT services designed to optimize processes and improve efficiency.",
    icon: <Database className="h-8 w-8 text-red-600" />,
    color: "red",
    link: "/services",
  },
  {
    title: "Internship Program",
    description:
      "Join our team as an intern and gain hands-on experience in digital marketing and web development under expert guidance.",
    icon: <Users className="h-8 w-8 text-emerald-600" />,
    color: "emerald",
    link: "/internship",
  },
]

const whyChooseUs = [
  {
    title: "Expertise & Experience",
    description:
      "Our team brings years of industry experience and technical expertise to every project, ensuring professional results.",
    icon: <Award className="h-6 w-6 text-blue-600" />,
  },
  {
    title: "Custom Solutions",
    description:
      "We create tailored strategies and solutions designed specifically for your business needs and objectives.",
    icon: <Layers className="h-6 w-6 text-blue-600" />,
  },
  {
    title: "Result-Oriented Approach",
    description: "We focus on delivering measurable outcomes that contribute directly to your business growth.",
    icon: <LineChart className="h-6 w-6 text-blue-600" />,
  },
  {
    title: "Ongoing Support",
    description:
      "Our relationship doesn't end with project delivery – we provide continuous support to ensure your digital assets perform optimally.",
    icon: <Clock className="h-6 w-6 text-blue-600" />,
  },
]
