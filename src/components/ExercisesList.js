import React, {useState, useEffect} from 'react';
import axios from "axios";
import Exercise from "./Exercise";


const ExercisesList = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/exercises/")
      .then(response => {
        setExercises(response.data)
      })
      .catch(err => {console.log(err)});
  },[])


  const deleteExercise = (id) => {
    axios.delete("http://localhost:5000/exercises/" + id)
    setExercises(exercises.filter(el => el._id !== id))
  }

  const exerciseList = () => {
    return exercises.map(currentExercise => {
      return <Exercise exercise={currentExercise} deleteExercise={deleteExercise} key={currentExercise._id} />
    })
  }
  return (
    <div>
     <h3>Logged Exercises</h3>
     <table className="table">
       <thead className="thead-light">
        <tr>
          <th>Usernamee</th>
          <th>Description</th>
          <th>Duration</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
       </thead>
       <tbody>
         {exerciseList()}
       </tbody>
     </table>
    </div>
  )
}

export default ExercisesList
