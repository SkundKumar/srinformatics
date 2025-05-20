"use client";

import { ContactForm } from "@/components/contact-form"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { TextReveal } from "@/components/ui/text-reveal"

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-blue-100 to-white">
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            src="/c4.mp4"
            poster="/placeholder.svg?height=600&width=1200"
          />
          <div className="absolute inset-0 bg-blue-900/10"></div>
        </div>
        <div className="container relative z-10 px-4 md:px-6 py-12 md:py-24">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
              <TextReveal text="Contact Us" type="chars" />
            </h1>
            <ScrollReveal variant="fade" delay={0.5}>
              <p className="max-w-[700px] text-white md:text-xl">
                Get in touch with us to discuss your project or ask any questions.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Send Us a Message</h2>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-24 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-xl mx-auto">
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm text-center">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Email</h3>
              <p className="text-gray-600">srinformatics20@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
