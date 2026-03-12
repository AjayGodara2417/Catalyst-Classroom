import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gray-50 py-24">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <div>

          <h1 className="text-5xl font-bold leading-tight">
            Become a
            <span className="text-blue-600"> Full Stack Developer </span>
            or AI Engineer
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Industry-ready courses for BTech, BCA and MTech students.
            Build real-world projects and get job ready.
          </p>

          <div className="mt-8 flex gap-4">

            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
              Explore Courses
            </button>

            <button className="border px-6 py-3 rounded-lg">
              Free Workshop
            </button>

          </div>

        </div>

        <Image
          src="/hero.png"
          width={500}
          height={500}
          alt="students learning"
          className="rounded-xl"
        />

      </div>

    </section>
  )
}
