import './App.css'
import WorkoutCard from './components/WorkoutCard'
import { useState } from 'react'

const initialWorkouts = [
  {
    title: 'Upper Body Day',
    exercise: 'Bench Press - 3x5',
  },
  {
    title: 'Lower Body Day',
    exercise: 'Squat - 5x5',
  },
  {
    title: 'Conditioning Day',
    exercise: 'Bike Intervals - 10 rounds',
  },
]

function App() {
  const [workouts, setWorkouts] = useState(initialWorkouts)
  const [title, setTitle] = useState('')
  const [exercise, setExercise] = useState('')
  
  function addWorkout() {
    const newWorkout = {
      title: title,
      exercise: exercise,
    }

    setWorkouts([...workouts, newWorkout])
    setTitle('')
    setExercise('')
  }

  function deleteWorkout(titleToDelete) {
    const updatedWorkouts = workouts.filter(
      (workout) => workout.title !== titleToDelete
    )

    setWorkouts(updatedWorkouts)
  }

  return (
    <main className="app">
      <h1>Athlete Training Dashboard</h1>
      <p>
        Track workouts, review progress, and build better training habits.
      </p>
      
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

      <button onClick={addWorkout}>
        Add Workout
      </button>

      {workouts.map((workout) => (
        <WorkoutCard
          key={workout.title}
          title={workout.title}
          exercise={workout.exercise}
          onDelete={deleteWorkout}
        />
      ))}
    </main>
  )
}

export default App