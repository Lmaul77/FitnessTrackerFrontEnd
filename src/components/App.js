import React, { useState } from "react";
import { Body, Footer, Header } from "./";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activities, setActivities] = useState([]);
  const [routines, setRoutines] = useState([]);
  const [activityName, setActivityName] = useState("");
  const [activityDescription, setActivityDescription] = useState("");
  const [routineName, setRoutineName] = useState("");
  const [routineGoal, setRoutineGoal] = useState("");

  return (
    <>
      <header>
        <Header isLoggedIn={isLoggedIn} />
      </header>
      <body>
        <Body
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          activities={activities}
          setActivities={setActivities}
          routines={routines}
          setRoutines={setRoutines}
          activityName={activityName}
          setActivityName={setActivityName}
          activityDescription={activityDescription}
          setActivityDescription={setActivityDescription}
          routineName={routineName}
          setRoutineName={setRoutineName}
          routineGoal={routineGoal}
          setRoutineGoal={setRoutineGoal}
        />
      </body>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
