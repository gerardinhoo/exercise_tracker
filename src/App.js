import React from 'react';
import {BrowserRouter as Router, Route} from  "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import ExercisesList from "./components/ExercisesList"
import EditExercises from "./components/EditExercises"
import CreateExercises from "./components/CreateExercises";
import CreateUsers from "./components/CreateUsers";





const App = () => {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercises} />
        <Route path="/create" component={CreateExercises} />
        <Route path="/user" component={CreateUsers} />
      </div>
      </Router>
  );
}

export default App;
