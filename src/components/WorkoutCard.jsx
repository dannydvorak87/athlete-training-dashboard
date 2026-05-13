function WorkoutCard({ title, exercise, onDelete }) {
  return (
    <div className="workout-card">
      <h2>{title}</h2>
      <p>{exercise}</p>
      
      <button onClick={() => onDelete(title)}>
        Delete
      </button>
    </div>
  )
}

export default WorkoutCard