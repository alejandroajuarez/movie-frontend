export function ActorsShow({ actor, onUpdate, onDestroy }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Handling update");
    const params = new FormData(event.target)
    onUpdate(params, actor)
    window.location.href = "/"
  }

  const handleRemove = () => {
    console.log("delete entry")
    onDestroy(actor)
  }

  return (
<div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
  <h2 className="text-2xl font-bold mb-2">Actor Name: {actor.first_name} {actor.last_name ? actor.last_name : ""}</h2>
  <p className="text-gray-700"><strong>ID:</strong> {actor.id}</p>
  <h4 className="text-lg font-semibold mt-2">Known For: <span className="text-gray-600">{actor.known_for}</span></h4>
  <p className="text-gray-700"><strong>Movie ID:</strong> {actor.movie_id}</p>

  <form onSubmit={handleSubmit} className="space-y-4 mt-4">
    <div>
      <label className="block text-sm font-medium text-gray-700">First Name</label>
      <input type="text" name="first_name" className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700">Last Name</label>
      <input type="text" name="last_name" className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700">Known For</label>
      <input type="text" name="known_for" className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700">Movie ID</label>
      <input type="text" name="movie_id" className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
    </div>

    <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition">
      Update Actor
    </button>
  </form>

  <button
    onClick={handleRemove}
    className="mt-4 w-full bg-red-500 text-white font-semibold py-2 rounded-md hover:bg-red-600 transition"
  >
    Delete Actor
  </button>
</div>

  )
}