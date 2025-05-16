import { MagnetButton } from "@/components/ui/magnet-button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { TextReveal } from "@/components/ui/text-reveal"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code, Database, Layout, ShoppingCart } from "lucide-react"

export default function WebDevelopmentPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-blue-100 to-white">
        <div className="container relative z-10 px-4 md:px-6 py-12 md:py-24">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-gray-900">
              <TextReveal text="Web Development" type="chars" />
            </h1>
            <ScrollReveal variant="fade" delay={0.5}>
              <p className="max-w-[700px] text-gray-600 md:text-xl">
                Custom websites and web applications that combine stunning design with powerful functionality.
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
                  SR Informatics delivers custom web development solutions that combine stunning design with powerful
                  functionality. We create websites and web applications that not only look impressive but also provide
                  seamless user experiences and drive business results.
                </p>
                <p>
                  Our development team stays up-to-date with the latest technologies and best practices to ensure your
                  digital presence is modern, secure, and scalable. Whether you need a simple informational website or a
                  complex web application, we have the expertise to bring your vision to life.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="slide-left">
              <div className="relative h-[400px] rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Web Development"
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
              <TextReveal text="Our Web Development Services" type="chars" />
            </h2>
            <ScrollReveal variant="fade" delay={0.3}>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We offer a comprehensive range of web development services to meet your business needs.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal staggerChildren staggerDelay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
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

      {/* Technologies Section */}
      <section className="py-24 section-container bg-white">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              <TextReveal text="Technologies We Work With" type="chars" />
            </h2>
            <ScrollReveal variant="fade" delay={0.3}>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We use the latest technologies and frameworks to build modern, scalable web solutions.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal staggerChildren staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-4">{tech.category}</h3>
                  <ul className="space-y-2">
                    {tech.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-gray-600">{item}</span>
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
      <section className="py-24 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              <TextReveal text="Our Web Development Process" type="chars" />
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
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl p-8 md:p-12 max-w-4xl mx-auto text-white shadow-lg">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Digital Presence?</h2>
                <p className="max-w-2xl mx-auto mb-8 text-indigo-100">
                  Contact us today to discuss your web development project and discover how we can help bring your
                  vision to life.
                </p>
                <MagnetButton asChild variant="secondary">
                  <Link
                    href="/contact"
                    className="inline-flex h-12 items-center justify-center rounded-md bg-white text-indigo-600 px-8 text-lg font-medium shadow transition-colors hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Start Your Project
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
    title: "Website Design and Development",
    description:
      "Create a compelling online presence with a custom website that reflects your brand identity and engages your audience.",
    icon: <Layout className="h-8 w-8 text-blue-600" />,
    color: "blue",
    features: [
      "Responsive Web Design",
      "Custom Website Development",
      "E-commerce Websites",
      "Landing Pages",
      "Website Redesign",
      "Website Maintenance",
    ],
  },
  {
    title: "E-commerce Solutions",
    description:
      "Transform your business with a powerful online store that maximizes sales and provides exceptional shopping experiences.",
    icon: <ShoppingCart className="h-8 w-8 text-indigo-600" />,
    color: "indigo",
    features: [
      "Custom E-commerce Development",
      "Shopping Cart Integration",
      "Payment Gateway Setup",
      "Inventory Management",
      "Order Processing Systems",
      "Mobile E-commerce",
    ],
  },
  {
    title: "Content Management Systems",
    description:
      "Manage your website content efficiently with user-friendly CMS implementations tailored to your needs.",
    icon: <Database className="h-8 w-8 text-red-600" />,
    color: "red",
    features: [
      "WordPress Development",
      "Joomla Implementation",
      "Drupal Solutions",
      "Custom CMS Development",
      "CMS Migration",
      "CMS Training",
    ],
  },
  {
    title: "Web Application Development",
    description: "Build powerful, scalable web applications that streamline processes and enhance user engagement.",
    icon: <Code className="h-8 w-8 text-amber-600" />,
    color: "amber",
    features: [
      "Custom Web App Development",
      "Progressive Web Apps (PWAs)",
      "SaaS Application Development",
      "API Development and Integration",
      "Database Design and Development",
      "Testing and Quality Assurance",
    ],
  },
]

const technologies = [
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "React", "Angular", "Vue.js"],
  },
  {
    category: "Backend",
    items: ["PHP", "Node.js", "Python", "Ruby on Rails"],
  },
  {
    category: "Database",
    items: ["MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    category: "CMS",
    items: ["WordPress", "Joomla", "Drupal"],
  },
  {
    category: "E-commerce",
    items: ["WooCommerce", "Magento", "Shopify"],
  },
  {
    category: "Cloud Platforms",
    items: ["AWS", "Google Cloud", "Microsoft Azure"],
  },
]

const process = [
  {
    title: "Discovery and Planning",
    description: "We start by understanding your business requirements, target audience, and project goals.",
  },
  {
    title: "Design and Prototyping",
    description: "Our designers create wireframes and visual designs that align with your brand and user expectations.",
  },
  {
    title: "Development",
    description: "Our development team brings the designs to life, building a functional website or application.",
  },
  {
    title: "Testing and Quality Assurance",
    description: "Rigorous testing ensures your website functions flawlessly across all devices and browsers.",
  },
  {
    title: "Deployment",
    description: "We launch your website or application, ensuring a smooth transition to the live environment.",
  },
  {
    title: "Support and Maintenance",
    description: "Ongoing support and maintenance keep your digital assets secure and up-to-date.",
  },
]
