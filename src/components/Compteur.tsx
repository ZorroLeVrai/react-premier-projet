interface CompteurProps {
    updateCounter: () => void;
    compteur: number;
}

export default function Compteur({updateCounter, compteur = 0}: CompteurProps) {
    return (
        <button onClick={updateCounter}>{compteur}</button>
    )
}