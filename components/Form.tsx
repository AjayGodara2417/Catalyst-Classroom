"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"

const courses = [
  "Web Development",
  "AI / Machine Learning",
  "Data Science",
  "Full Stack Development",
]

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)

    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      setForm({
        name: "",
        email: "",
        phone: "",
        course: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <section className="px-6 py-20 bg-linear-to-b from-green-50 to-white">

      <div className="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-2xl shadow-lg border">

        {/* HEADER */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Enroll in a Course
          </h2>
          <p className="text-gray-500 mt-2">
            Start your learning journey with Catalyst Classroom 🚀
          </p>
        </div>

        {/* SUCCESS MESSAGE */}
        {success && (
          <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg text-sm text-center">
            🎉 Enrollment successful! We’ll contact you soon.
          </div>
        )}

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          />

          {/* Course Dropdown */}
          <select
            name="course"
            value={form.course}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg text-gray-600 focus:ring-2 focus:ring-green-500 outline-none"
          >
            <option value="">Select Course</option>
            {courses.map((course, i) => (
              <option key={i} value={course}>
                {course}
              </option>
            ))}
          </select>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Any specific goals or questions?"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg h-28 resize-none focus:ring-2 focus:ring-green-500 outline-none"
          />

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition ${
              loading
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-green-500 text-white hover:bg-green-600"
            }`}
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={18} />
                Enrolling...
              </>
            ) : (
              "Enroll Now"
            )}
          </button>

        </form>

      </div>

    </section>
  )
}