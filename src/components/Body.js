import React from "react";
import {
  Routines,
  Activities,
  Createactivities,
  Createroutine,
  Userroutines,
  Profilebar,
  RoutineActivities,
} from "./";
import { Route, Routes } from "react-router-dom";

const Body = ({
  activities,
  setActivities,
  routines,
  setRoutines,
  activityName,
  setActivityName,
  activityDescription,
  setActivityDescription,
  routineName,
  setRoutineName,
  routineGoal,
  setRoutineGoal,
  isLoggedIn
}) => {
  return (
    <div className="fullBody">
      <div>
        <Profilebar isLoggedIn={isLoggedIn}/>
      </div>
      <Routes>
        <Route
          path="/activities"
          element={
            <Activities activities={activities} setActivities={setActivities} />
          }
        />
        <Route
          path="/createActivities"
          element={
            <Createactivities
              activities={activities}
              setActivities={setActivities}
              activityName={activityName}
              setActivityName={setActivityName}
              activityDescription={activityDescription}
              setActivityDescription={setActivityDescription}
            />
          }
        />
        <Route path="/RoutineActivities" element={<RoutineActivities routines={routines} setRoutines={setRoutines}/>} />
        <Route path="/userRoutines" element={<Userroutines />} />
        <Route path="/createRoutine" element={<Createroutine  routineName={routineName}
              setRoutineName={setRoutineName}
              routineGoal={routineGoal}
              setRoutineGoal={setRoutineGoal}
              routines={routines}
              setRoutines={setRoutines} />} />
        <Route
          path="/allRoutines"
          element={<Routines routines={routines} setRoutines={setRoutines} />}
        />
      </Routes>
    </div>
  );
};

export default Body;
