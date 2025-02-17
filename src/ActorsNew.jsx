import axios from "axios";

export function ActorsNew() {
  const handleSubmit = (event) => {
    console.log("handling submit");
    const params = new FormData(event.target)
    axios.post("http://localhost:3000/actors.json", params).then(response => {
      console.log(response.data);
      window.location.href = "/"
    })
    event.target.reset();
  }

  return (
    <div id="actors-new">
      <h1>New Actor Entry</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="actorFirstName" className="form-label">Actor First Name</label>
          <input type="text" className="form-control" id="actorFirstName" name="first_name" />
        </div>
        <div className="mb-3">
          <label htmlFor="actorLastName" className="form-label">Actor Last name</label>
          <input type="text"  className="form-control" id="actorLastName" name="last_name" />
        </div>
        <div className="mb-3">
          <label htmlFor="actorKnownFor" className="form-label">Actor Known For</label>
          <input type="text"  className="form-control" id="actorKnownFor" name="known_for" />
        </div>
        <div className="mb-3">
          <label htmlFor="actorMovieId" className="form-label">Movie ID</label>
          <input type="text" className="form-control" id="actorMovieId" name="movie_id" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}