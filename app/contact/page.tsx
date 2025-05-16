import { SpotlightCard } from "@/components/ui/spotlight-card"
import { MagnetButton } from "@/components/ui/magnet-button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { TextReveal } from "@/components/ui/text-reveal"
import { Mail } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
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
            src="/c2.mp4"
            poster="/placeholder.svg?height=600&width=1200"
          />
          <div className="absolute inset-0 bg-blue-900/10 backdrop-blur-sm"></div>
        </div>
        <div className="container relative z-10 px-4 md:px-6 py-12 md:py-24">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
              <TextReveal text="Get in Touch" type="chars" />
            </h1>
            <ScrollReveal variant="fade" delay={0.5}>
              <p className="max-w-[700px] text-white md:text-xl">
                We're excited to hear about your project and discuss how SR Informatics can help achieve your digital
                goals.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 section-container bg-white">
        <div className="container px-4 md:px-6 relative z-10">
          <ScrollReveal variant="zoom">
            <SpotlightCard className="max-w-4xl mx-auto p-12 bg-white border-gray-200 shadow-lg text-center">
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 p-4 rounded-full mb-6">
                  <Mail className="h-10 w-10 text-blue-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Email Us</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                  Send us an email with your inquiry, and our team will get back to you as soon as possible.
                </p>
                <div className="text-2xl font-medium text-primary mb-8">srinformatics20@gmail.com</div>
                <MagnetButton asChild size="lg">
                  <Link
                    href="mailto:srinformatics20@gmail.com"
                    className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Send Email
                  </Link>
                </MagnetButton>
              </div>
            </SpotlightCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-24 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              <TextReveal text="How We Can Help" type="chars" />
            </h2>
            <ScrollReveal variant="fade" delay={0.3}>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Reach out to discuss any of the following services or inquiries.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal staggerChildren staggerDelay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {inquiryTypes.map((type, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-100 hover:border-gray-300 transition-colors shadow-sm h-full"
                >
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

const inquiryTypes = [
  {
    title: "Project Inquiries",
    description:
      "Discuss your project requirements, timeline, and budget. We'll provide a customized solution for your needs.",
  },
  {
    title: "Service Information",
    description: "Learn more about our services, including web development, digital marketing, and other IT solutions.",
  },
  {
    title: "Internship Applications",
    description: "Apply for our internship program and start your career in web development or digital marketing.",
  },
  {
    title: "Job Applications",
    description: "Explore career opportunities at SR Informatics and join our growing team of professionals.",
  },
  {
    title: "Partnership Opportunities",
    description: "Discuss potential collaborations and partnerships with our team.",
  },
  {
    title: "General Inquiries",
    description: "For any other questions or information, we're here to help.",
  },
]
