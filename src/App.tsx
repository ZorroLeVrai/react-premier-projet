import './App.css'
import { useState } from "react";
import Compteur from './components/Compteur'
import Reset from './components/Reset';
import DisplayList from './components/DisplayList';

function App() {
  const [compteur, setCompteur] = useState(0);

  const incrementCompteur = () => setCompteur(prevCompteur => prevCompteur + 1);

  return (
    <>
      <h1>Page Home</h1>
      <div>
        <Compteur updateCounter={incrementCompteur} compteur={compteur}/>
        <Reset resetCompteur={() => setCompteur(0)} />
      </div>
      <div>
        <DisplayList />
      </div>
    </>
  )
}

export default App
