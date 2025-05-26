interface CompteurProps {
    updateCounter: () => void;
    compteur: number;
}

export default function Compteur({updateCounter, compteur}: CompteurProps) {
    return (
        <button onClick={updateCounter}>{compteur}</button>
    )
}