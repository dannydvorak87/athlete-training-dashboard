function WorkoutForm({
  title,
  exercise,
  setTitle,
  setExercise,
  onSubmit,
  editingWorkout,
}) {
  return (
    <div className="workout-form">
      <input
        type="text"
        placeholder="Workout Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <input
        type="text"
        placeholder="Exercise"
        value={exercise}
        onChange={(event) => setExercise(event.target.value)}
      />

      <button onClick={onSubmit}>
        {editingWorkout ? 'Update Workout' : 'Add Workout'}
      </button>
    </div>
  )
}

export default WorkoutForm