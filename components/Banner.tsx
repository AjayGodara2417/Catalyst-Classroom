import {
  Sparkles,
  Trophy,
  Bot,
  Lightbulb
} from "lucide-react"
import Image from "next/image"

export default function Banner() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-7xl mx-auto bg-[#1E2235] rounded-3xl p-10 md:p-16 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div className="text-white">

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Upgrade your career in the <br />
            <span className="text-blue-400">AI world</span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg">
            Future-proof your skills with Catalyst Classroom. 
            Get access to real-world courses in Web Development,
            AI/ML and Data Science from industry experts.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-6 mt-8 text-gray-200">

            <div className="flex items-center gap-3">
              <Sparkles size={20}/>
              <span>Learn Web, AI and more</span>
            </div>

            <div className="flex items-center gap-3">
              <Trophy size={20}/>
              <span>Get certification</span>
            </div>

            <div className="flex items-center gap-3">
              <Bot size={20}/>
              <span>Practice with AI assistance</span>
            </div>

            <div className="flex items-center gap-3">
              <Lightbulb size={20}/>
              <span>Advance your career</span>
            </div>

          </div>

          {/* CTA */}
          <div className="mt-10">
            <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition">
              Learn more
            </button>

            <p className="text-gray-400 mt-4">
              Starting at ₹999/course
            </p>
          </div>

        </div>

        {/* RIGHT SIDE IMAGE GRID */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4 h-105">

          <div className="rounded-xl overflow-hidden bg-blue-400">
            <Image
              width={500}
              height={500}
              src="/hero1.png"
              alt="tech learning"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-xl overflow-hidden bg-gray-200">
            <Image
              width={500}
              height={500}
              src="/hero2.png"
              alt="mentor"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-xl overflow-hidden bg-purple-400">
            <Image
              width={500}
              height={500}
              src="/hero3.png"
              alt="AI graphics"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-xl overflow-hidden bg-gray-300">
            <Image
              width={500}
              height={500}
              src="/hero4.png"
              alt="VR learning"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  )
}
