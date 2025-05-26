interface CompteurProps {
    resetCompteur: () => void;
}

const Reset = ({resetCompteur}: CompteurProps ) => {
  return (
    <button onClick={resetCompteur}>Reset</button>
  )
}

export default Reset;