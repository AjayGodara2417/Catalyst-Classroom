"use client"

import { useState, ChangeEvent, FormEvent } from "react"

// Component to display a loading spinner
const LoadingSpinner = () => (
  <svg
    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
)

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)
  const [error, setError] = useState<string>("")

  // Handle changes in the input fields
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess(false)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (res.ok) {
        setSuccess(true)
        // Reset the form fields after success
        setForm({
          name: "",
          email: "",
          message: "",
        })
      } else {
        setError(data.message || "Failed to send message. Please try again.")
      }
    } catch (err) {
      console.error("Submission error:", err)
      setError("A server error occurred. Please try again later.")
    } finally {
      // Always set loading to false, regardless of success or failure
      setLoading(false)
    }
  }

  return (
    <section className="px-6 py-24 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-12 rounded-2xl shadow-lg border border-gray-100">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
            Contact Catalyst Classroom
          </h1>
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            Have questions about our web development, AI/ML, or Data Science
            courses? Were here to help. Send us a message and well get back to
            you shortly.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Status Feedback */}
          {success && (
            <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-800 p-5 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-green-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-lg font-semibold">
                Message sent successfully! Thanks for reaching out. Well be in touch soon.
              </p>
            </div>
          )}

          {error && (
            <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-800 p-5 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-red-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-lg font-semibold">{error}</p>
            </div>
          )}

          {/* Name Field */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-lg font-medium text-gray-700"
            >
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-4 rounded-xl text-lg text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="John Doe"
              required
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-lg font-medium text-gray-700"
            >
              Your Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-4 rounded-xl text-lg text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="john.doe@email.com"
              required
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-lg font-medium text-gray-700"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-4 rounded-xl text-lg text-gray-900 placeholder:text-gray-400 h-48 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-none"
              placeholder="Tell us about your background and what courses you are interested in..."
              required
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className={`flex items-center justify-center gap-3 w-full p-5 rounded-xl text-xl font-bold transition ${
                loading
                  ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800"
              }`}
            >
              {loading ? (
                <>
                  <LoadingSpinner />
                  Sending Message...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}