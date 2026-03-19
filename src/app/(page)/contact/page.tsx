"use client"

import { useState } from "react"

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess(false)

    setTimeout(() => {
      setSuccess(true)
      setLoading(false)
      setForm({ name: "", email: "", message: "" })
    }, 1500)
  }

  return (
    <section className="px-6 py-20 bg-linear-to-b from-green-50 to-white min-h-screen">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT INFO */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Let’s talk 👋
          </h1>

          <p className="text-gray-500 mt-4 text-lg">
            Have questions about courses or career paths? We’re here to help you grow.
          </p>

          <div className="mt-8 space-y-3 text-gray-600">
            <p>📧 catalystclassroom1@gmail.com</p>
            <p>📞 +91 62839 XXXXX</p>
          </div>
        </div>

        {/* FORM */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border">

          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Send a message
          </h2>

          {/* FEEDBACK */}
          {success && (
            <div className="mb-4 p-4 bg-green-50 text-green-700 rounded-lg text-sm">
              Message sent successfully 🎉
            </div>
          )}

          {error && (
            <div className="mb-4 p-4 bg-red-50 text-red-600 rounded-lg text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              required
            />

            <textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full p-3 border rounded-lg h-32 resize-none focus:ring-2 focus:ring-green-500 outline-none"
              required
            />

            <button
              disabled={loading}
              className={`w-full py-3 rounded-lg font-semibold transition ${
                loading
                  ? "bg-gray-300"
                  : "bg-green-500 text-white hover:bg-green-600"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>
        </div>

      </div>

    </section>
  )
}