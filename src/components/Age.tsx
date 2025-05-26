interface AgeProps {
    annees?: number;
}

const Age = ({annees = 18} : AgeProps) => {
  return (
    <div>Age: <span id="age_annees">{annees}</span></div>
  )
}

export default Age;