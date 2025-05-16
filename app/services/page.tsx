import { MagnetButton } from "@/components/ui/magnet-button"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { TextReveal } from "@/components/ui/text-reveal"
import Link from "next/link"
import { ArrowRight, Database, Globe, LineChart, Smartphone, Briefcase } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-blue-100 to-white">
        <div className="container relative z-10 px-4 md:px-6 py-12 md:py-24">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-gray-900">
              <TextReveal text="Our Services" type="chars" />
            </h1>
            <ScrollReveal variant="fade" delay={0.5}>
              <p className="max-w-[700px] text-gray-600 md:text-xl">
                Comprehensive digital solutions tailored to your business needs.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Core Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of digital services to help your business thrive online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-24">
            <ScrollReveal variant="slide-right">
              <Link href="/services/digital-marketing" className="group">
                <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm h-full hover:shadow-md transition-all duration-300">
                  <div className="bg-blue-100 p-4 rounded-full w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                    <LineChart className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Digital Marketing</h3>
                  <p className="text-gray-600 mb-4">
                    Transform your online visibility with our data-driven digital marketing strategies. We help
                    businesses connect with their target audience and drive measurable results.
                  </p>
                  <div className="text-blue-600 flex items-center font-medium group-hover:text-blue-700">
                    Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal variant="slide-left">
              <Link href="/services/web-development" className="group">
                <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm h-full hover:shadow-md transition-all duration-300">
                  <div className="bg-indigo-100 p-4 rounded-full w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Web Development</h3>
                  <p className="text-gray-600 mb-4">
                    From responsive websites to complex web applications, our development team creates tailored digital
                    solutions that align with your business objectives.
                  </p>
                  <div className="text-indigo-600 flex items-center font-medium group-hover:text-indigo-700">
                    Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Additional Services</h2>
          </div>

          <ScrollReveal staggerChildren staggerDelay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {additionalServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 group hover:border-gray-300 hover:shadow-md transition-all duration-300 h-full"
                >
                  <div
                    className={`bg-${service.color}-100 p-3 rounded-full w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}
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

      {/* Process Section */}
      <section className="py-24 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              <TextReveal text="Our Process" type="chars" />
            </h2>
            <ScrollReveal variant="fade" delay={0.3}>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We follow a structured approach to ensure successful project delivery.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal staggerChildren staggerDelay={0.15} className="max-w-5xl mx-auto">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-start gap-8 mb-12">
                  <div className="flex-shrink-0 bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                {index < process.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-12 bg-blue-200 ml-[0.3rem]"></div>
                )}
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 section-container alt bg-white">
        <div className="container px-4 md:px-6 relative z-10">
          <ScrollReveal variant="zoom">
            <SpotlightCard className="max-w-4xl mx-auto bg-white border-gray-200 shadow-lg">
              <div className="text-center p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Ready to Get Started?</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                  Contact us today to discuss your project and discover how our services can help your business grow.
                </p>
                <MagnetButton asChild>
                  <Link
                    href="/contact"
                    className="inline-flex h-12 items-center justify-center rounded-md bg-secondary px-8 text-lg font-medium text-secondary-foreground shadow transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Contact Us
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

const additionalServices = [
  {
    title: "IT Consulting",
    description:
      "Our IT consulting services help businesses optimize their technology infrastructure, implement solutions that enhance efficiency, and align IT strategy with business objectives.",
    icon: <Briefcase className="h-6 w-6 text-amber-600" />,
    color: "amber",
    link: "/services/it-consulting",
  },
  {
    title: "Mobile App Development",
    description:
      "Extend your digital presence with custom mobile applications that engage users and deliver value on iOS and Android platforms.",
    icon: <Smartphone className="h-6 w-6 text-emerald-600" />,
    color: "emerald",
    link: "/services/mobile-app-development",
  },
  {
    title: "Digital Transformation",
    description:
      "Navigate your business's digital evolution with our comprehensive transformation services that modernize processes, systems, and customer experiences.",
    icon: <Database className="h-6 w-6 text-blue-600" />,
    color: "blue",
    link: "/services/digital-transformation",
  },
]

const process = [
  {
    title: "Discovery",
    description:
      "We begin by understanding your business goals, requirements, and challenges through in-depth consultations and research.",
  },
  {
    title: "Planning",
    description:
      "Our team develops a comprehensive project plan, including timelines, milestones, and resource allocation.",
  },
  {
    title: "Design",
    description:
      "We create wireframes, prototypes, and visual designs that align with your brand and user expectations.",
  },
  {
    title: "Development",
    description:
      "Our developers build your solution using the latest technologies and best practices, with regular updates and feedback loops.",
  },
  {
    title: "Testing",
    description:
      "We conduct thorough testing to ensure your solution is robust, secure, and performs optimally across all platforms.",
  },
  {
    title: "Deployment",
    description:
      "Once approved, we deploy your solution to production, ensuring a smooth transition and minimal disruption.",
  },
  {
    title: "Support & Maintenance",
    description: "We provide ongoing support and maintenance to keep your solution running smoothly and up-to-date.",
  },
]
