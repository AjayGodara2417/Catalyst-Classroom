"use client"

import { useState } from "react"
import { ChevronDown, Search } from "lucide-react"

const faqs = [
  {
    question: "What courses do you offer?",
    answer:
      "We offer courses in Web Development, AI/ML, and Data Science with real-world projects and mentorship."
  },
  {
    question: "Do I get a certificate after completion?",
    answer:
      "Yes, you will receive an industry-recognized certificate after successfully completing the course."
  },
  {
    question: "Are the courses beginner friendly?",
    answer:
      "Absolutely. Our courses are designed for beginners as well as intermediate learners."
  },
  {
    question: "Do you provide placement assistance?",
    answer:
      "Yes, we provide career guidance, resume building, and interview preparation support."
  },
  {
    question: "What is the course duration?",
    answer:
      "Course duration varies from 4 weeks to 12 weeks depending on the program."
  }
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [search, setSearch] = useState("")

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <section className="min-h-screen px-6 py-20 bg-linear-to-b from-green-50 to-white">

      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Frequently Asked Questions
          </h1>

          <p className="text-gray-500 mt-4 text-lg">
            Find answers to common questions about our courses and platform.
          </p>
        </div>

        {/* SEARCH */}
        <div className="mt-10 flex items-center bg-white border rounded-xl px-4 py-3 shadow-sm">
          <Search size={18} className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search your question..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none text-sm"
          />
        </div>

        {/* FAQ LIST */}
        <div className="mt-10 space-y-4">

          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className="bg-white border rounded-xl shadow-sm overflow-hidden"
              >

                {/* QUESTION */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex justify-between items-center p-5 text-left"
                >
                  <span className="font-medium text-gray-800">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      isOpen ? "rotate-180 text-green-500" : "text-gray-400"
                    }`}
                  />
                </button>

                {/* ANSWER */}
                <div
                  className={`px-5 text-gray-600 text-sm transition-all duration-300 ${
                    isOpen ? "pb-5 max-h-40" : "max-h-0 overflow-hidden"
                  }`}
                >
                  {faq.answer}
                </div>

              </div>
            )
          })}

          {filteredFaqs.length === 0 && (
            <p className="text-center text-gray-500 mt-10">
              No results found 😕
            </p>
          )}

        </div>

      </div>

    </section>
  )
}