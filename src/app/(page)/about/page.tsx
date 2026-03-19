import { Brain, Code2, Database } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <section className="px-6 py-20">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            About Catalyst Classroom
          </h1>

          <p className="text-gray-600 mt-4 text-lg">
            Empowering students with real-world tech skills in Web Development,
            Artificial Intelligence and Data Science.
          </p>
        </div>

        {/* Mission */}
        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">

          <Image
            width={500}
            height={500}
            alt="about-image"
            src="/about.png"
            className="rounded-xl"
          />

          <div>

            <h2 className="text-2xl font-bold">
              Our Mission
            </h2>

            <p className="mt-4 text-gray-600">
              Catalyst Classroom was created to bridge the gap between
              academic learning and industry requirements. Our programs
              focus on real-world projects, mentorship, and career growth.
            </p>

            <p className="mt-4 text-gray-600">
              We help BTech, BCA and MTech students become job-ready
              developers, AI engineers and data scientists.
            </p>

          </div>

        </div>

        {/* Focus Areas */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 text-center">

          <div className="p-6 border rounded-xl">
            <Code2 size={40} className="mx-auto text-blue-600"/>
            <h3 className="mt-4 font-semibold text-xl">
              Web Development
            </h3>
            <p className="text-gray-600 mt-2">
              Full stack development with real-world projects.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <Brain size={40} className="mx-auto text-purple-600"/>
            <h3 className="mt-4 font-semibold text-xl">
              Artificial Intelligence
            </h3>
            <p className="text-gray-600 mt-2">
              Learn ML models, neural networks and AI systems.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <Database size={40} className="mx-auto text-green-600"/>
            <h3 className="mt-4 font-semibold text-xl">
              Data Science
            </h3>
            <p className="text-gray-600 mt-2">
              Analyze data and build intelligent systems.
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}
