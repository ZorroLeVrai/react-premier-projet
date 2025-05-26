import { useState } from "react";

export default function Compteur() {
    const [compteur, setCompteur] = useState(0);

    const increment = (prevValue: number) => prevValue + 1

    const handleClick= () => setCompteur(increment);

    return (
        <button onClick={handleClick}>{compteur}</button>
    )
}