export function ActorsShow({ actor, onUpdate, onDestroy }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Handling update");
    const params = new FormData(event.target)
    onUpdate(params, actor)
  }

  const handleRemove = () => {
    console.log("delete entry")
    onDestroy(actor)
  }

  return (
    <div>
      <p>Actors</p>
      <p><b>id: </b>{actor.id}</p>
      <h2>Actor Name: {actor.first_name}{actor.last_name || "N/a"}</h2>
      <h4>Known For: {actor.known_for}</h4>
      <p>Movie Id: {actor.movie_id}</p>

    <form onSubmit={handleSubmit}>
      <p>First Name: <input type="text" name="first_name" defaultValue={actor.first_name} /></p>
      <p>Last Name: <input type="text" name="last_name" defaultValue={actor.last_name} /></p>
      <p>Known For: <input type="text" name="known_for" defaultValue={actor.known_for} /></p>
      <p>Movie ID: <input type="text" name="id" defaultValue={actor.id} /></p>
      <button>Update Actors</button>
    </form>
      <br />
      <br />
      <br />
      
      <button onClick={handleRemove}>Delete Actor</button>
    </div>
  )
}