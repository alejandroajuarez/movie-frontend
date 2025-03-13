import axios from "axios";

export function ActorsNew() {
  const handleSubmit = (event) => {
    console.log("handling submit");
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/actors.json", params).then(response => {
      console.log(response.data);
      window.location.href = "/"
    })
    event.target.reset();
  }

  return (
    <div id="actors-new" className="max-w-lg mx-auto p-6 bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-white bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-center">
        New Actor Entry
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div>
          <label htmlFor="actorFirstName" className="block text-sm font-medium text-gray-300">
            Actor First Name
          </label>
          <input
            type="text"
            id="actorFirstName"
            name="first_name"
            className="mt-1 w-full bg-gray-800 text-gray-200 border border-gray-600 rounded-md p-2 focus:ring-gray-400 focus:border-gray-500"
          />
        </div>
  
        <div>
          <label htmlFor="actorLastName" className="block text-sm font-medium text-gray-300">
            Actor Last Name
          </label>
          <input
            type="text"
            id="actorLastName"
            name="last_name"
            className="mt-1 w-full bg-gray-800 text-gray-200 border border-gray-600 rounded-md p-2 focus:ring-gray-400 focus:border-gray-500"
          />
        </div>
  
        <div>
          <label htmlFor="actorKnownFor" className="block text-sm font-medium text-gray-300">
            Actor Known For
          </label>
          <input
            type="text"
            id="actorKnownFor"
            name="known_for"
            className="mt-1 w-full bg-gray-800 text-gray-200 border border-gray-600 rounded-md p-2 focus:ring-gray-400 focus:border-gray-500"
          />
        </div>
  
        <div>
          <label htmlFor="actorMovieId" className="block text-sm font-medium text-gray-300">
            Movie ID
          </label>
          <input
            type="text"
            id="actorMovieId"
            name="movie_id"
            className="mt-1 w-full bg-gray-800 text-gray-200 border border-gray-600 rounded-md p-2 focus:ring-gray-400 focus:border-gray-500"
          />
        </div>
  
        <button
          type="submit"
          className="w-full bg-gray-700 text-white font-semibold py-2 rounded-md hover:bg-gray-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );  
}