import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Header, Footer, Body, Register, Login } from "./";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activities, setActivities] = useState([]);
  const [routines, setRoutines] = useState([]);
  const [activityName, setActivityName] = useState("")
  const [activityDescription, setActivityDescription] = useState("")
  const [routineName,setRoutineName] = useState("");
  const [routineGoal,setRoutineGoal] = useState("");
  

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} />
      {/* { isLoggedIn? <Userbar setIsLoggedIn={setIsLoggedIn} /> : null } */}
      <Routes>
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />

        <Route path="/register" element={<Register />} />
      </Routes>
      <Body
        activities={activities}
        setActivities={setActivities}
        routines={routines}
        setRoutines={setRoutines}
        activityName={activityName}
        setActivityName={setActivityName}
        activityDescription={activityDescription}
        setActivityDescription={setActivityDescription}
        routineName = {routineName}
        setRoutineName={setRoutineName}
        routineGoal= {routineGoal}
        setRoutineGoal= {setRoutineGoal}
      />

      <Footer />
    </div>
  );
};

export default App;
