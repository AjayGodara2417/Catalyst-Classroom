export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-400 py-16">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-xl font-bold text-white">
            Catalyst Classroom
          </h2>

          <p className="mt-4 text-sm leading-relaxed">
            Training the next generation of developers and AI engineers.
          </p>
        </div>

        {/* COURSES */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Courses
          </h3>

          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Web Development</li>
            <li className="hover:text-white cursor-pointer">AI / ML</li>
            <li className="hover:text-white cursor-pointer">Data Science</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Contact
          </h3>

          <p className="text-sm">catalystclassroom1@gmail.com</p>
          <p className="text-sm mt-2">+91 62839 XXXXX</p>
        </div>

      </div>

      <div className="text-center text-gray-500 text-sm mt-12">
        © 2026 Catalyst Classroom. All rights reserved.
      </div>

    </footer>
  )
}