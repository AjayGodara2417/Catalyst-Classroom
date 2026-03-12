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
    <section className="px-6 py-16">

      <div className="max-w-7xl mx-auto bg-[#1E2235] rounded-3xl p-10 md:p-16 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div className="text-white">

          <h2 className="text-4xl font-bold leading-tight">
            Get certified and get <br />
            ahead in your career
          </h2>

          <p className="text-gray-300 mt-6 text-lg">
            Prep for certifications with comprehensive courses,
            practice tests, and special offers on exam vouchers.
          </p>

          <button className="mt-8 font-bold flex items-center gap-2 text-white hover:gap-3 transition-all">
            Explore certifications and vouchers
            <ArrowRight size={18}/>
          </button>

        </div>

        {/* RIGHT SIDE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {certifications.map((cert, i) => (
            <div
              key={i}
              className="bg-[#2B2F45] rounded-2xl overflow-hidden hover:scale-105 transition"
            >
              <Image
                width={500}
                height={500}
                src={cert.img}
                alt={cert.title}
                className="h-32 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="text-white text-lg font-semibold">
                  {cert.title}
                </h3>

                <p className="text-gray-400 text-sm mt-1">
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
