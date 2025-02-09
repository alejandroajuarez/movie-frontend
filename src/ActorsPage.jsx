import { ActorsIndex } from './ActorsIndex';
import { ActorsNew } from './ActorsNew';
import { ActorsShow } from './ActorsShow';
// import { Modal } from './Modal';
import axios from 'axios';
import { useState, useEffect } from 'react';

export function ActorsPage() {
  const [actors, setActors] = useState([]);
  const [isActorsShowVisible, setIsActorsShowVisible] = useState(false);
  const [currentActor, setCurrentActor] = useState({});
}