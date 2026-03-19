"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"

const certifications = [
  {
    title: "CompTIA",
    desc: "Cloud, Networking, Cybersecurity",
    img: "/cert1.jpg",
  },
  {
    title: "AWS",
    desc: "Cloud, AI, Coding, Networking",
    img: "/cert2.jpg",
  },
  {
    title: "PMI",
    desc: "Project & Program Management",
    img: "/cert3.jpg",
  },
]

export default function CertificationBanner() {
  return (
    <section className="px-6 py-20 bg-white">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>

          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Get certified and get ahead in your career
          </h2>

          <p className="text-gray-500 mt-6 text-lg max-w-md">
            Prepare with structured courses, mock tests, and exclusive exam vouchers.
          </p>

          <button className="mt-8 flex items-center gap-2 text-green-600 font-semibold hover:gap-3 transition-all">
            Explore certifications
            <ArrowRight size={18}/>
          </button>

        </div>

        {/* RIGHT */}
        <div className="grid md:grid-cols-3 gap-6">

          {certifications.map((cert, i) => (
            <div
              key={i}
              className="bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
            >
              <Image
                width={500}
                height={500}
                src={cert.img}
                alt={cert.title}
                className="h-32 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="text-gray-800 text-lg font-semibold">
                  {cert.title}
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  {cert.desc}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  )
}