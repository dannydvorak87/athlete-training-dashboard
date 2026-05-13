import './App.css'
import WorkoutCard from './components/WorkoutCard'
import { useEffect, useState } from 'react'

// Default workouts to display if there are no workouts stored in local storage
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
  // Whenever the workouts state changes, save the updated workouts to local storage
  useEffect(() => {
    localStorage.setItem('workouts', JSON.stringify(workouts))
  }, [workouts])

  // Add a new workout to the list of workouts and clear the input fields
  function addWorkout() {
    const newWorkout = {
      title: title,
      exercise: exercise,
    }

    setWorkouts([...workouts, newWorkout])
    setTitle('')
    setExercise('')
  }

  // Delete a workout from the list of workouts based on the title
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

      // Render a WorkoutCard for each workout in the workouts array
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