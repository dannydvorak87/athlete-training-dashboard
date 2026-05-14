function WorkoutCard({ title, exercise, onDelete, onEdit }) {
    return (
        <div className="workout-card">
            <h2>{title}</h2>
            <p>{exercise}</p>

            <button onClick={() => onDelete(title)}>
                Delete
            </button>

            <button onClick={() => onEdit(title)}>
                Edit
            </button>
        </div>
    )
}

export default WorkoutCard