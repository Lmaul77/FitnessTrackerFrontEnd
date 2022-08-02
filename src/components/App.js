import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Header, Footer, Body, Register, Login } from "./";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activities, setActivities] = useState([]);
  const [routines, setRoutines] = useState([]);
  const [name,setName] = useState([]);
  const [goal,setGoal] = useState([]);
  

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
        name ={setName}
        goal ={setGoal}
      />

      <Footer />
    </div>
  );
};

export default App;
