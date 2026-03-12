"use client"

import { useState } from "react"
import Link from "next/link"

export default function Navbar() {

  const [open,setOpen] = useState(false)

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/">
          <h1 className="text-2xl font-bold text-blue-600">
            TechCatalyst
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* CTA */}
        <button className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
          Enroll Now
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={()=>setOpen(!open)}
          className="md:hidden"
        >
          ☰
        </button>

      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3">
          <Link href="/">Home</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      )}

    </nav>
  )
}
