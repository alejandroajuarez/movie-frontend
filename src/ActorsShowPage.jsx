import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import { ActorsShow } from "./ActorsShow";

export function ActorsShowPage() {
  const actor = useLoaderData();
  const navigate = useNavigate();

  const handleUpdate = (actor, params) => {
    console.log("handleUpdate", actor);
    axios.patch(`http://localhost:3000/actors/${actor.id}.json`, params).then(() => {
      navigate("/actors");
    });
  };

  const handleDestroy = (actor) => {
    console.log("handleDestroy", actor);
    axios.delete(`/actors/${actor.id}.json`).then(() => {
      navigate("/actors");
    });
  };

  return (
    <div>
      <ActorsShow actor={actor} onUpdate={handleUpdate} onDestroy={handleDestroy} />
    </div>
  )
}