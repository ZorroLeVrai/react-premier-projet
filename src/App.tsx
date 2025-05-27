import './App.css'
import { useState } from "react";
import Compteur from './components/Compteur'
import Reset from './components/Reset';
import DisplayList from './components/DisplayList';
import FetchDemo from './components/FetchDemo';
import FetchPost from './components/FetchPost';

function App() {
  const [compteur, setCompteur] = useState(0);

  const incrementCompteur = () => setCompteur(prevCompteur => prevCompteur + 1);

  return (
    <>
      <h1>Page Home</h1>
      <div>
        <FetchPost />
      </div>
    </>
  )
}

export default App
