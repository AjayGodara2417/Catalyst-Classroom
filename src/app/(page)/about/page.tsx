"use client"

import { Brain, Code2, Database } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <section className="px-6 py-20 bg-linear-to-b from-green-50 to-white">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            About Catalyst Classroom
          </h1>

          <p className="text-gray-500 mt-4 text-lg">
            Empowering students with real-world tech skills in Web Development,
            AI, and Data Science.
          </p>
        </div>

        {/* MISSION */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">

          <div className="rounded-2xl overflow-hidden shadow-md">
            <Image
              width={500}
              height={500}
              alt="about"
              src="/about.png"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Our Mission
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Catalyst Classroom bridges the gap between academic learning
              and real industry requirements through project-based training.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              We help students become job-ready developers, AI engineers,
              and data scientists with mentorship and hands-on learning.
            </p>
          </div>

        </div>

        {/* FOCUS AREAS */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {[
            {
              title: "Web Development",
              desc: "Full stack development with real-world projects.",
              icon: Code2,
              color: "text-blue-600 bg-blue-100"
            },
            {
              title: "Artificial Intelligence",
              desc: "Learn ML models, neural networks and AI systems.",
              icon: Brain,
              color: "text-purple-600 bg-purple-100"
            },
            {
              title: "Data Science",
              desc: "Analyze data and build intelligent systems.",
              icon: Database,
              color: "text-green-600 bg-green-100"
            }
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={i}
                className="p-6 bg-white border rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition text-center"
              >
                <div className={`w-fit mx-auto p-3 rounded-xl ${item.color}`}>
                  <Icon size={28} />
                </div>

                <h3 className="mt-4 font-semibold text-xl text-gray-800">
                  {item.title}
                </h3>

                <p className="text-gray-500 mt-2 text-sm">
                  {item.desc}
                </p>
              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}