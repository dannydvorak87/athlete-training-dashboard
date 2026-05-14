import './App.css'
import WorkoutCard from './components/WorkoutCard'
import { useEffect, useState } from 'react'
import WorkoutForm from './components/WorkoutForm'

// Default workouts to display if there are no workouts stored in local storage
const initialWorkouts = [
  {
    id: crypto.randomUUID(),
    title: 'Upper Body Day',
    exercise: 'Bench Press - 3x5',
  },
  {
    id: crypto.randomUUID(),
    title: 'Lower Body Day',
    exercise: 'Squat - 5x5',
  },
  {
    id: crypto.randomUUID(),
    title: 'Conditioning Day',
    exercise: 'Bike Intervals - 10 rounds',
  },
]

function App() {
  //Check for workouts stored in the browser's local storage. If they exist, use those. Otherwise, use the default workouts.
  const [workouts, setWorkouts] = useState(() => {
    const savedWorkouts = localStorage.getItem('workouts')

    if (savedWorkouts) {
      return JSON.parse(savedWorkouts)
    }

    return initialWorkouts
  })
  const [title, setTitle] = useState('')
  const [exercise, setExercise] = useState('')
  const [editingWorkout, setEditingWorkout] = useState(null)
  // Whenever the workouts state changes, save the updated workouts to local storage
  useEffect(() => {
    localStorage.setItem('workouts', JSON.stringify(workouts))
  }, [workouts])

  // Add a new workout to the list of workouts and clear the input fields
  function addWorkout() {
    if (editingWorkout) {
      const updatedWorkouts = workouts.map((workout) => {
        if (workout.id === editingWorkout) {
          return {
            ...workout,
            title: title,
            exercise: exercise,
          }
        }

        return workout
      })

      setWorkouts(updatedWorkouts)
      setEditingWorkout(null)
    } else {
      const newWorkout = {
        id: crypto.randomUUID(),
        title: title,
        exercise: exercise,
      }

      setWorkouts([...workouts, newWorkout])
    }

    setTitle('')
    setExercise('')
  }

  // Delete a workout from the list of workouts based on the title
  function deleteWorkout(idToDelete) {
    const updatedWorkouts = workouts.filter(
      (workout) => workout.id !== idToDelete
    )

    setWorkouts(updatedWorkouts)
  }

  // Edit a workout with current title and exercise values, then clear the input fields and exit editing mode
  function startEditing(idToEdit) {
    const workoutToEdit = workouts.find(
      (workout) => workout.id === idToEdit
    )

    setTitle(workoutToEdit.title)
    setExercise(workoutToEdit.exercise)
    setEditingWorkout(idToEdit)
    }

  return (
    <main className="app">
      <h1>Athlete Training Dashboard</h1>
      <p>
        Track workouts, review progress, and build better training habits.
      </p>

    <WorkoutForm
      title={title}
      exercise={exercise}
      setTitle={setTitle}
      setExercise={setExercise}
      onSubmit={addWorkout}
      editingWorkout={editingWorkout}
    />

      {/* Render a WorkoutCard for each workout in the workouts array */}
      {workouts.map((workout) => (
        <WorkoutCard
          key={workout.title}
          id={workout.id}
          title={workout.title}
          exercise={workout.exercise}
          onDelete={deleteWorkout}
          onEdit={startEditing}
        />
      ))}
    </main>
  )
}

export default App