"use client"

import Link from "next/link"
import { Search, ChevronDown } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="w-full bg-white">

      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 border-2 border-yellow-400 rounded-sm flex items-center justify-center font-bold text-yellow-500">
            C
          </div>
          <span className="text-xs text-gray-400">atalyst Classroom</span>
        </div>

        {/* SEARCH */}
        <div className="hidden md:flex items-center bg-gray-100 px-4 py-2 rounded-xl w-95">
          <Search size={16} className="text-gray-500 mr-2" />
          <input
            placeholder="Want to learn?"
            className="bg-transparent outline-none text-sm w-full"
          />
          <div className="flex items-center gap-1 text-green-500 text-sm font-medium cursor-pointer">
            Explore <ChevronDown size={14} />
          </div>
        </div>

        {/* MENU */}
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <Link href="/" className="hover:text-green-500 font-medium">Home</Link>
          <Link href="/about" className="hover:text-green-500 font-medium">About us</Link>
          <Link href="/courses" className="hover:text-green-500 font-medium">Courses</Link>
          <Link href="/contact" className="hover:text-green-500 font-medium">Contact us</Link>
          <Link href="/faq" className="hover:text-green-500 font-medium">FAQs</Link>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
            <Link href="/enroll">
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600">
              Enroll Now
            </button>
            </Link>
        </div>

      </div>
    </nav>
  )
}