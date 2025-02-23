import { useLoaderData, useNavigate } from "react-router-dom";
import { ActorsIndex } from "./ActorsIndex";

export function ActorsIndexPage() {
  const actors = useLoaderData();
  const navigate = useNavigate();

  const handleShow = (actor) => {
    console.log("handleshow", actor);
    navigate(`/actors/${actor.id}`);
  };

  return (
    <div>
      <ActorsIndex actors={actors} onShow={handleShow} />
    </div>
  );
}