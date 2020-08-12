import React, {useState, useEffect, useRef} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const EditExercises = (props) => {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  const userInput = useRef(null);
  
  
  
  
  useEffect(() => {
  
    axios.get(`http://localhost:5000/exercises/${props.match.params.id}`)
    .then(response => {
      setUsername(response.data.username)
      setDescription(response.data.description)
      setDuration(response.data.duration)
      setDate(response.data.date)
    })


    axios.get("http://localhost:5000/users/")
      .then(response => {
        if(response.data.length > 0) {
          setUsers(response.data.map(user => user.username))
        }
      })
  }, [])

  const onChangeUsername = (e) => {
    setUsername(e.target.value)
  }

  const onChangeDescription = (e) => {
    setDescription(e.target.value)
  }

  const onChangeDuration = (e) => {
    setDuration(e.target.value)
  }
    const onChangeDate = (date) => {
    setDate(date)
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const exercise = {username, description, duration, date};

    console.log(exercise);

    axios.post(`http://localhost:5000/exercises/update${props.match.params.id}`, exercise)
      .then(res => console.log(res.data));

    window.location = "/";
  }

  return (
    <div>
      <h2>Edit Exercise Log</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <select 
            ref={userInput}
            required 
            className="form-control" 
            value={username} 
            onChange={onChangeUsername}
          >
            {
              users.map((user) => {
                return(
                  <option key={user} value={user}>
                    {user}
                  </option>
                )
              })
            }
          </select>
        </div>

        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            className="form-control" 
            value={description} 
            onChange={onChangeDescription}
          />
        </div>

        <div className="form-group">
          <label>Duration (In Minutes): </label>
          <input
            type="text"
            className="form-control" 
            value={duration} 
            onChange={onChangeDuration}
          />
        </div>

        <div className="form-group">
          <label>Date (In Minutes): </label>
          <div>
            <DatePicker selected={date} onChange={onChangeDate}/>
          </div>
        </div>

        <div className="form-group">
           <input type="submit" value="Edit Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
  )
}

export default EditExercises;
