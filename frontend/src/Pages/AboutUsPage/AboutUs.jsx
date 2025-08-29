import React from 'react'

function AboutUs() {
  return (
    <div className="bg-[#fff8ef] py-16 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side */}
        <div>
          <span className="bg-orange-100 text-orange-600 font-medium px-3 py-1 rounded-full text-sm inline-flex items-center mb-4">
            ✨ AI Powered
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Ace Interviews with{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text">
              AI-Powered
            </span>{" "}
            Learning
          </h1>
        </div>

        {/* Right Side */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Find your next course.
          </h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search 250,000 courses..."
              className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
              🔍
            </button>
          </div>
          <p className="mt-3 text-gray-600 text-sm">
            Or browse by <a href="#" className="text-orange-500 underline">subject</a> or{" "}
            <a href="#" className="text-orange-500 underline">university</a>.{" "}
            <a href="#" className="text-gray-500 underline">Learn more</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs