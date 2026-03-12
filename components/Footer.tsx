export default function Footer() {

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-xl font-bold text-white">
            Catalyst Classroom
          </h2>

          <p className="mt-4">
            Training the next generation of developers and AI engineers.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold">
            Courses
          </h3>

          <ul className="mt-4 space-y-2">
            <li>Web Development</li>
            <li>AI / ML</li>
            <li>Data Science</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold">
            Contact
          </h3>

          <p className="mt-4">
            catalystclassroom1@gmail.com
          </p>

          <p>
            +91 62839 XXXXX
          </p>
        </div>

      </div>

      <p className="text-center text-gray-500 mt-10">
        © 2026 Catalyst Classroom
      </p>

    </footer>
  )
}
