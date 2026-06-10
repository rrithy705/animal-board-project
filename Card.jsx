function Card(props) {
  return (
    <div className="card">


      <h2>{props.name}</h2>

      <p>
        <strong>Fun Fact:</strong> {props.fact}
      </p>

      <p>
        <strong>Habitat:</strong> {props.habitat}
      </p>

      <button>Learn More</button>

    </div>
  )
}

export default Card