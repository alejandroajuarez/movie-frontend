export function ActorsIndex({ actors, onShow }) {
  console.log(actors);

  return (
    <div id="actors-index">
      <h1>All Actors</h1>
      <div className="row">
        {actors.map((actor) => (
          <div key={actor.id} className="col-md-4">
            <div className="card">
              <h3 className="card-title">{actor.first_name} {actor.last_name}</h3>
              <p className="card-text">{actor.known_for}</p>
              <p className="card-text">{actor.movie_id}</p>
              <button type="button" className="btn btn-primary" onClick={() => onShow(actor)}>More Info</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}