"use client"

import Image from "next/image"
import { Users, Video, BookOpen } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f6f9f8] py-24">

      {/* BACKGROUND CIRCLES */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-125 h-125 border border-green-200 rounded-full top-10 left-10"></div>
        <div className="absolute w-100 h-100 border border-green-100 rounded-full bottom-10 right-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10 relative z-10">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-5xl font-bold leading-tight text-gray-900">
            Up Your <span className="text-green-500">Skills</span> <br />
            To <span className="text-green-500">Advance</span> Your <br />
            <span className="text-green-500">Career</span> Path
          </h1>

          <p className="text-gray-500 mt-6 max-w-md">
            Learn UI-UX Design skills with weekend UX. The latest online
            learning system and material that help your knowledge growing.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-6">
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
              Get Started
            </button>
            <button className="bg-green-100 text-green-600 px-6 py-3 rounded-lg hover:bg-green-200 transition">
              Get free trial
            </button>
          </div>

          {/* FEATURES */}
          <div className="flex gap-6 mt-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              🎤 Public Speaking
            </div>
            <div className="flex items-center gap-2">
              💼 Career-Oriented
            </div>
            <div className="flex items-center gap-2">
              💡 Creative Thinking
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE + DESIGN */}
        <div className="relative flex justify-center">

          {/* GREEN CIRCLE */}
          <div className="absolute w-95 h-95 bg-green-500 rounded-full right-10 top-10"></div>

          {/* IMAGE */}
          <div className="relative z-10">
            <Image
              src="/hero.png" // 👉 replace with your image
              alt="student"
              width={350}
              height={400}
              className="object-contain"
            />
          </div>

          {/* FLOATING CARDS */}

          {/* Video Courses */}
          <div className="absolute left-0 top-1/3 bg-white shadow-lg rounded-xl px-4 py-3 flex items-center gap-3">
            <div className="bg-green-100 p-2 rounded-lg">
              <Video className="text-green-600" size={18} />
            </div>
            <div>
              <p className="font-bold text-gray-800">2K+</p>
              <p className="text-xs text-gray-500">Video Courses</p>
            </div>
          </div>

          {/* Online Courses */}
          <div className="absolute right-0 top-0 bg-white shadow-lg rounded-xl px-4 py-3 flex items-center gap-3">
            <div className="bg-green-100 p-2 rounded-lg">
              <BookOpen className="text-green-600" size={18} />
            </div>
            <div>
              <p className="font-bold text-gray-800">5K+</p>
              <p className="text-xs text-gray-500">Online Courses</p>
            </div>
          </div>

          {/* Tutors */}
          <div className="absolute right-10 bottom-10 bg-white shadow-lg rounded-xl px-4 py-3 flex items-center gap-3">
            <div className="bg-green-100 p-2 rounded-lg">
              <Users className="text-green-600" size={18} />
            </div>
            <div>
              <p className="font-bold text-gray-800">250+</p>
              <p className="text-xs text-gray-500">Tutors</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}