import { courses } from "../data/courses"

export default function Courses() {

  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Our Courses
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {courses.map((course,i)=>(
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >

              <h3 className="text-xl font-semibold">
                {course.title}
              </h3>

              <p className="mt-2 text-gray-600">
                Duration: {course.duration}
              </p>

              <p className="text-gray-600">
                Projects: {course.projects}
              </p>

              <button className="mt-4 text-blue-600 font-semibold">
                View Details →
              </button>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}
