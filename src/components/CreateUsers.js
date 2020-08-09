import React, {useState} from 'react';


const CreateUsers = () => {
  const [username, setUsername] = useState("");

  const onChangeUsername = (e) => {
    setUsername(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const user = {username};
    console.log(user);
    setUsername("");
  }

  return (
    <div>
      <h2>Create New User</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <input 
            type="text"
            required 
            className="form-control" 
            value={username} 
            onChange={onChangeUsername}
          />
          
        </div>

        <div className="form-group">
           <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
  )
}

export default CreateUsers;
