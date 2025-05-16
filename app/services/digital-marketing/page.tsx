import { MagnetButton } from "@/components/ui/magnet-button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { TextReveal } from "@/components/ui/text-reveal"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BarChart2, FileText, Mail, Share2 } from "lucide-react"

export default function DigitalMarketingPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-blue-100 to-white">
        <div className="container relative z-10 px-4 md:px-6 py-12 md:py-24">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-gray-900">
              <TextReveal text="Digital Marketing" type="chars" />
            </h1>
            <ScrollReveal variant="fade" delay={0.5}>
              <p className="max-w-[700px] text-gray-600 md:text-xl">
                Enhance your online presence and drive measurable results with our data-driven digital marketing
                strategies.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 section-container bg-white">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <ScrollReveal variant="slide-right">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Overview</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  At SR Informatics, we develop comprehensive digital marketing strategies that enhance your online
                  presence, engage your target audience, and drive conversions. Our data-driven approach ensures
                  measurable results and optimal return on investment.
                </p>
                <p>
                  We understand that each business has unique goals and challenges, which is why we create customized
                  digital marketing solutions tailored to your specific needs. Whether you're looking to increase brand
                  awareness, generate leads, or boost sales, our team has the expertise to help you achieve your
                  objectives.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="slide-left">
              <div className="relative h-[400px] rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Digital Marketing"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 clip-path-diagonal bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              <TextReveal text="Our Digital Marketing Services" type="chars" />
            </h2>
            <ScrollReveal variant="fade" delay={0.3}>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We offer a comprehensive range of digital marketing services to help your business succeed online.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal staggerChildren staggerDelay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 section-container bg-white">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              <TextReveal text="Our Digital Marketing Process" type="chars" />
            </h2>
            <ScrollReveal variant="fade" delay={0.3}>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We follow a structured approach to ensure your digital marketing campaigns deliver results.
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

      {/* Metrics Section */}
      <section className="py-24 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              <TextReveal text="Success Metrics We Track" type="chars" />
            </h2>
            <ScrollReveal variant="fade" delay={0.3}>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We measure the success of your digital marketing campaigns using these key metrics.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal staggerChildren staggerDelay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm text-center hover:shadow-md transition-all duration-300"
                >
                  <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <BarChart2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900">{metric}</h3>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 section-container alt bg-white">
        <div className="container px-4 md:px-6 relative z-10">
          <ScrollReveal variant="zoom">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 md:p-12 max-w-4xl mx-auto text-white shadow-lg">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Boost Your Online Presence?</h2>
                <p className="max-w-2xl mx-auto mb-8 text-blue-100">
                  Contact us today to discuss how our digital marketing services can help your business grow.
                </p>
                <MagnetButton asChild variant="secondary">
                  <Link
                    href="/contact"
                    className="inline-flex h-12 items-center justify-center rounded-md bg-white text-blue-600 px-8 text-lg font-medium shadow transition-colors hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
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

const services = [
  {
    title: "Social Media Marketing",
    description:
      "Build and engage your community through strategic social media campaigns that enhance brand awareness and foster customer loyalty.",
    icon: <Share2 className="h-8 w-8 text-blue-600" />,
    color: "blue",
    features: [
      "Social Media Strategy",
      "Content Creation and Curation",
      "Community Management",
      "Paid Social Campaigns",
      "Influencer Collaboration",
      "Social Media Analytics",
    ],
  },
  {
    title: "Content Marketing",
    description:
      "Establish your brand as an industry authority with valuable, relevant content that resonates with your target audience.",
    icon: <FileText className="h-8 w-8 text-indigo-600" />,
    color: "indigo",
    features: [
      "Content Strategy Development",
      "Blog Writing",
      "Ebooks and Whitepapers",
      "Infographics and Visual Content",
      "Video Content",
      "Content Distribution",
    ],
  },
  {
    title: "Email Marketing",
    description:
      "Nurture leads and maintain customer relationships through personalized email campaigns that drive engagement and conversions.",
    icon: <Mail className="h-8 w-8 text-red-600" />,
    color: "red",
    features: [
      "Email Strategy",
      "Newsletter Design and Content",
      "Drip Campaign Creation",
      "Segmentation and Personalization",
      "A/B Testing",
      "Email Analytics and Optimization",
    ],
  },
]

const process = [
  {
    title: "Discovery and Analysis",
    description: "We begin by understanding your business objectives, target audience, and current digital presence.",
  },
  {
    title: "Strategy Development",
    description: "Based on our analysis, we create a customized digital marketing strategy aligned with your goals.",
  },
  {
    title: "Implementation",
    description: "Our team executes the strategy across relevant channels, optimizing for maximum impact.",
  },
  {
    title: "Monitoring and Optimization",
    description: "We continuously track performance, making data-driven adjustments to improve results.",
  },
  {
    title: "Reporting and Analysis",
    description: "Regular reporting keeps you informed of progress, insights, and return on investment.",
  },
]

const metrics = [
  "Website Traffic",
  "Conversion Rates",
  "Engagement Metrics",
  "Search Engine Rankings",
  "Return on Ad Spend",
  "Customer Acquisition Cost",
  "Brand Awareness",
  "Social Media Growth",
]
