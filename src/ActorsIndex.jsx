export function ActorsIndex({ actors, onShow }) {
  console.log(actors);

  return (
    <div id="actors-index" className="w-full h-full min-h-screen flex items-center justify-center">
      
      {/* Glassmorphism Container */}
      <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-lg shadow-lg w-full max-w-6xl">
        <h1 className="text-2xl font-bold mb-4 text-white bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent text-center">
          All Actors
        </h1>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {actors.map((actor) => (
            <div key={actor.id} className="bg-white/10 backdrop-blur-md border border-white/20 shadow-md rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white">{actor.first_name} {actor.last_name}</h3>
              <p className="text-gray-400">{actor.known_for}</p>
              <p className="text-gray-500">Movie ID: {actor.movie_id}</p>
              <div className="relative inline-flex group">
              <div
                className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"
              ></div>
              <button
                type="button"
                className="relative inline-flex items-center justify-center px-5 py-2 text-base font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700 rounded mt-2"
                onClick={() => onShow(actor)}
              >
                More Info
              </button>
            </div>


            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
  
}