import { ActorsIndex } from './ActorsIndex';
import { ActorsNew } from './ActorsNew';
import { ActorsShow } from './ActorsShow';
import { Modal } from './Modal';
import axios from 'axios';
import { useState, useEffect } from 'react';

export function ActorsPage() {
  const [actors, setActors] = useState([]);
  const [isActorsShowVisible, setIsActorsShowVisible] = useState(false);
  const [currentActor, setCurrentActor] = useState({});

  const handleIndex = () => {
    console.log("Handling index");
    axios.get('http://localhost:3000/actors.json').then(function (response) {
      console.log("inside the .then")
      console.log(response.data);
      setActors(response.data);
    })
    console.log("after the .then")
  }

  const handleShow = (actor) => {
    console.log(actor);
    setCurrentActor(actor);
    console.log("handling show");
    setIsActorsShowVisible(true);
  }

  const closeModal = () => {
    console.log("Closing Modal");
    setIsActorsShowVisible(false)
  }

  const handleCreate = (params) => {
    console.log('handling create');
    axios.post("http://localhost:3000/actors.json", params).then(response => {
      console.log(response.data)
      setActors([...actors, response.data])
    })
  }

  const handleUpdate = (params, actor) => {
    console.log('handing update')
    axios.patch(`http://localhost:3000/actors/${actor.id}.json`, params).then(response => {
      console.log(response.data)
      setIsActorsShowVisible(false)
      // loop through actors array
      // find the actor I want to update
      // swap out the current values for response.data
      setActors(actors.map(p => p.id === response.data.id ? response.data : p))
    })
  }

  const handleDestroy = (actor) => {
    console.log('handling destroy')
    axios.delete(`http://localhost:3000/actors/${actor.id}.json`).then(response => {
      console.log(response.data);
      // loop through the array of actors, delete the one with the matching actor id
      setActors(actors.filter(p => p.id !== actor.id))
      setIsActorsShowVisible(false)
    })
  }

  useEffect(handleIndex, []);



  return (
    <main>
      <ActorsNew onCreate={handleCreate} />
      <ActorsIndex actors={actors} onShow={handleShow} />
      <Modal show={isActorsShowVisible} onClose={closeModal}>
        <ActorsShow actor={currentActor} onUpdate={handleUpdate} onDestroy={handleDestroy} />
      </Modal>
    </main>
  )
}