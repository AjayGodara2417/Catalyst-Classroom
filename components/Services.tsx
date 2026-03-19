"use client"

import { Monitor, Layout, PenTool } from "lucide-react"

export default function Services() {
  return (
    <section className="bg-[#f7f9f8] py-20">

      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* HEADER */}
        <p className="text-green-500 text-sm font-medium mb-2">
          Our Services
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 max-w-2xl mx-auto">
          Fostering a playful & engaging learning environment
        </h2>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">

          {/* CARD 1 (ACTIVE) */}
          <div className="bg-linear-to-br from-green-400 to-green-500 text-white p-6 rounded-xl text-left shadow-md">
            <div className="bg-white/20 p-2 rounded-md w-fit mb-4">
              <Monitor size={20} />
            </div>

            <h3 className="font-semibold text-lg">
              Interaction Design
            </h3>

            <p className="text-sm mt-2 text-white/80">
              Lessons on design that cover the most recent developments.
            </p>

            <button className="mt-4 text-sm font-medium">
              Learn More →
            </button>
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-6 rounded-xl text-left shadow-sm border hover:shadow-md transition">
            <div className="bg-blue-100 p-2 rounded-md w-fit mb-4">
              <Layout size={20} className="text-blue-500" />
            </div>

            <h3 className="font-semibold text-lg text-gray-800">
              UX Design Course
            </h3>

            <p className="text-sm mt-2 text-gray-500">
              Classes in development that cover the most recent advancements in web.
            </p>

            <button className="mt-4 text-sm text-green-500 font-medium">
              Learn More →
            </button>
          </div>

          {/* CARD 3 */}
          <div className="bg-white p-6 rounded-xl text-left shadow-sm border hover:shadow-md transition">
            <div className="bg-pink-100 p-2 rounded-md w-fit mb-4">
              <PenTool size={20} className="text-pink-500" />
            </div>

            <h3 className="font-semibold text-lg text-gray-800">
              User Interface Design
            </h3>

            <p className="text-sm mt-2 text-gray-500">
              User Interface Design courses that cover the most recent trends.
            </p>

            <button className="mt-4 text-sm text-green-500 font-medium">
              Learn More →
            </button>
          </div>

        </div>

        {/* DOT INDICATOR */}
        <div className="flex justify-center mt-8 gap-2">
          <div className="w-6 h-2 bg-green-400 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>

      </div>
    </section>
  )
}