import { Brain, Globe, Database } from "lucide-react"

export default function Stats() {
  return (
    <section className="py-16 bg-white">

      <div className="max-w-8xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 items-center text-center">

        
        {/* Database Logo */}
        <div className="flex flex-col items-center justify-center">
          <Database size={48} className="text-green-600"/>
          <p className="text-gray-600 mt-2">
            Database
          </p>
        </div>

        {/* Students Trained */}
        <div>
          <h3 className="text-4xl font-bold text-blue-600">
            1200+
          </h3>
          <p className="text-gray-600 mt-2">
            Students Trained
          </p>
        </div>

        {/* AI Logo */}
        <div className="flex flex-col items-center justify-center">
          <Brain size={48} className="text-purple-600"/>
          <p className="text-gray-600 mt-2">
            Artificial Intelligence
          </p>
        </div>

        {/* Real Projects */}
        <div>
          <h3 className="text-4xl font-bold text-blue-600">
            25+
          </h3>
          <p className="text-gray-600 mt-2">
            Real Projects Built
          </p>
        </div>

        {/* Web Dev Logo */}
        <div className="flex flex-col items-center justify-center">
          <Globe size={48} className="text-blue-600"/>
          <p className="text-gray-600 mt-2">
            Web Development
          </p>
        </div>

      </div>

    </section>
  )
}
