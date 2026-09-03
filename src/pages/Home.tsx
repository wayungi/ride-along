const Home = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center">

      <div className="max-w-7xl mx-auto px-6 w-full">

        <div className="max-w-2xl">

          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Share the journey.
            <span className="text-blue-600"> Ride together.</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Find people heading your way, share rides,
            reduce travel costs, and make every journey easier.
          </p>

          <div className="mt-8 flex gap-4">

            <button
              className="bg-blue-600 text-white px-6 py-3 rounded-lg
                         font-medium hover:bg-blue-700"
            >
              Find a Ride
            </button>

            <button
              className="border border-gray-300 px-6 py-3 rounded-lg
                         font-medium text-gray-700 hover:bg-gray-100"
            >
              Offer a Ride
            </button>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Home