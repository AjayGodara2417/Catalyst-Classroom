"use client"

import {
  Sparkles,
  Trophy,
  Bot,
  Lightbulb
} from "lucide-react"
import Image from "next/image"

export default function Banner() {
  return (
    <section className="px-6 py-20 bg-linear-to-b from-green-50 to-white">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Upgrade your career in the <br />
            <span className="text-green-500">AI world</span>
          </h1>

          <p className="mt-6 text-gray-500 text-lg max-w-md">
            Future-proof your skills with Catalyst Classroom.
            Learn Web Dev, AI/ML, and Data Science with real-world projects.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-2 gap-5 mt-8 text-gray-700">

            {[
              { icon: Sparkles, text: "Learn Web & AI" },
              { icon: Trophy, text: "Get certification" },
              { icon: Bot, text: "AI-powered practice" },
              { icon: Lightbulb, text: "Career growth" }
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Icon size={18} className="text-green-600" />
                  </div>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              )
            })}

          </div>

          {/* CTA */}
          <div className="mt-10 flex items-center gap-6">
            <button className="bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-green-600 transition shadow-md">
              Get Started
            </button>

            <p className="text-gray-500 text-sm">
              Starting at ₹999/course
            </p>
          </div>

        </div>

        {/* RIGHT IMAGE GRID */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4 h-105">

          {[1,2,3,4].map((i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-md hover:scale-[1.02] transition"
            >
              <Image
                width={500}
                height={500}
                src={`/hero${i}.png`}
                alt="hero"
                className="w-full h-full object-cover"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}