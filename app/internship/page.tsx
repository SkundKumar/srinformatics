import { MagnetButton } from "@/components/ui/magnet-button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { TextReveal } from "@/components/ui/text-reveal"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, Code, LineChart } from "lucide-react"

export default function InternshipPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-blue-100 to-white">
        <div className="container relative z-10 px-4 md:px-6 py-12 md:py-24">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-gray-900">
              <TextReveal text="Internship Program" type="chars" />
            </h1>
            <ScrollReveal variant="fade" delay={0.5}>
              <p className="max-w-[700px] text-gray-600 md:text-xl">
                Gain hands-on experience and kickstart your career in the digital industry.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-24 section-container bg-white">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <ScrollReveal variant="slide-right">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Program Overview</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  SR Informatics' Internship Program is designed to provide aspiring professionals with hands-on
                  experience in digital marketing and web development. Our comprehensive program combines practical work
                  experience with structured learning opportunities, preparing interns for successful careers in the
                  digital industry.
                </p>
                <p>
                  As an intern at SR Informatics, you'll work on real client projects, receive mentorship from
                  experienced professionals, and develop both technical and soft skills essential for success in the
                  digital world.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="slide-left">
              <div className="relative h-[400px] rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="SR Informatics internship program"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Join Our Program */}
      <section className="py-24 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              <TextReveal text="Why Join Our Internship Program" type="chars" />
            </h2>
            <ScrollReveal variant="fade" delay={0.3}>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our program offers unique benefits that will help you grow professionally.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal staggerChildren staggerDelay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-8 group hover:border-gray-300 hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className={`bg-gradient-to-br from-${benefit.color}-100 to-${benefit.color}-50 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Available Positions */}
      <section className="py-24 section-container bg-white">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              <TextReveal text="Available Internship Positions" type="chars" />
            </h2>
            <ScrollReveal variant="fade" delay={0.3}>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore our current internship opportunities and find the perfect fit for your skills and interests.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal staggerChildren staggerDelay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {positions.map((position, index) => (
                <SpotlightCard key={index} className="border border-gray-200 bg-white p-8 h-full" spotlightSize={200}>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{position.title}</h3>
                  <ul className="space-y-2 mb-6">
                    {position.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <p className="font-medium text-gray-900">Requirements:</p>
                    <p className="text-gray-600">{position.requirements}</p>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-24 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              <TextReveal text="Internship Structure" type="chars" />
            </h2>
            <ScrollReveal variant="fade" delay={0.3}>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our structured program ensures you gain valuable experience and skills.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal staggerChildren staggerDelay={0.15} className="max-w-5xl mx-auto">
            {structure.map((step, index) => (
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
                {index < structure.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-12 bg-blue-200 ml-[0.3rem]"></div>
                )}
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-24 section-container alt bg-white">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              <TextReveal text="Application Process" type="chars" />
            </h2>
            <ScrollReveal variant="fade" delay={0.3}>
              <p className="text-gray-600 max-w-2xl mx-auto">Follow these steps to apply for our internship program.</p>
            </ScrollReveal>
          </div>

          <ScrollReveal staggerChildren staggerDelay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
              {applicationProcess.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm h-full text-center">
                    <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                      {index + 1}
                    </div>
                    <h3 className="font-bold mb-2 text-gray-900">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                  {index < applicationProcess.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-gray-400" />
                    </div>
                  )}
                </div>
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
                <TextReveal text="Ready to Apply?" type="words" />
              </h2>
              <p className="text-gray-600 mb-8">
                Take the first step towards an exciting career in the digital industry. Apply for our internship program
                today.
              </p>
              <MagnetButton asChild>
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Apply Now
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
    title: "Hands-on Experience",
    description: "Work on real client projects and gain practical skills that go beyond classroom learning.",
    icon: <Code className="h-8 w-8 text-blue-600" />,
    color: "blue",
  },
  {
    title: "Mentorship",
    description: "Receive guidance and feedback from experienced professionals who are experts in their fields.",
    icon: <BookOpen className="h-8 w-8 text-indigo-600" />,
    color: "indigo",
  },
  {
    title: "Skill Development",
    description:
      "Develop technical and soft skills that are essential for a successful career in the digital industry.",
    icon: <LineChart className="h-8 w-8 text-red-600" />,
    color: "red",
  },
]

const positions = [
  {
    title: "Digital Marketing Intern",
    responsibilities: [
      "Assist in developing and implementing digital marketing strategies",
      "Create content for various digital channels",
      "Support social media management and community engagement",
      "Help with SEO and SEM campaigns",
      "Analyze campaign performance data",
    ],
    requirements: "Background in marketing, communication, or related field",
  },
  {
    title: "Web Development Intern",
    responsibilities: [
      "Participate in the development of websites and web applications",
      "Assist in coding, testing, and debugging",
      "Collaborate with designers and back-end developers",
      "Support maintenance of existing websites",
      "Learn modern web development frameworks and tools",
    ],
    requirements: "Basic knowledge of HTML, CSS, JavaScript",
  },
  {
    title: "UI/UX Design Intern",
    responsibilities: [
      "Assist in creating user interfaces for websites and applications",
      "Support user research and usability testing",
      "Contribute to wireframing and prototyping",
      "Help with visual design elements",
      "Learn design tools and methodologies",
    ],
    requirements: "Basic design skills and familiarity with design tools",
  },
]

const structure = [
  {
    title: "Orientation",
    description:
      "All interns begin with a comprehensive orientation to familiarize themselves with our company, processes, and tools.",
  },
  {
    title: "Projects Assignment",
    description:
      "Interns are assigned to projects based on their skills and learning objectives, working alongside experienced team members.",
  },
  {
    title: "Weekly Training",
    description:
      "Regular training sessions cover various aspects of digital marketing and web development to complement practical experience.",
  },
  {
    title: "Progress Reviews",
    description: "Periodic reviews provide feedback on performance and identify areas for further development.",
  },
  {
    title: "Final Presentation",
    description: "Interns present their contributions and learnings at the end of the program.",
  },
]

const applicationProcess = [
  {
    title: "Submit Application",
    description: "Complete the online application form with your resume and cover letter.",
  },
  {
    title: "Initial Screening",
    description: "Our team reviews applications to select candidates for the next stage.",
  },
  {
    title: "Interview",
    description: "Selected candidates are invited for an interview to discuss their background, skills, and goals.",
  },
  {
    title: "Skill Assessment",
    description: "Depending on the position, candidates may be asked to complete a small project or test.",
  },
  {
    title: "Offer and Onboarding",
    description: "Successful candidates receive an offer and begin the onboarding process.",
  },
]
