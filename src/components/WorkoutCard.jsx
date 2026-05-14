function WorkoutCard({ id, title, exercise, onDelete, onEdit }) {
    return (
        <div className="workout-card">
            <h2>{title}</h2>
            <p>{exercise}</p>

            <button onClick={() => onDelete(id)}>
                Delete
            </button>

            <button onClick={() => onEdit(id)}>
                Edit
            </button>
        </div>
    )
}

export default WorkoutCard