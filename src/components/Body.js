import React from "react";
import {
  Routines,
  Activities,
  Createactivities,
  Createroutine,
  Updateactivities,
  Updateroutines,
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
}) => {
  return (
    <div className="fullBody">
      <div>
        <Profilebar />
        {/* <Userroutines />
        <Updateroutines /> */}

        {/*      
            <Createroutine
              routineName={routineName}
              setRoutineName={setRoutineName}
              routineGoal={routineGoal}
              setRoutineGoal={setRoutineGoal}
              routines={routines}
              setRoutines={setRoutines}
            />
        
            <Createactivities
              activities={activities}
              setActivities={setActivities}
              activityName={activityName}
              setActivityName={setActivityName}
              activityDescription={activityDescription}
              setActivityDescription={setActivityDescription}
            /> */}
      </div>
      <Routes>
        <Route path="/activites" element={<Activities />} />
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
        <Route path="/routineActivities/:id" element={<RoutineActivities />} />
        <Route path="/userRoutines" element={<Userroutines />} />
        <Route
          path="/allRoutines"
          element={<Routines routines={routines} setRoutines={setRoutines} />}
        />
      </Routes>
      {/* <div className="bodyActivities">
            <Activities activities={activities} setActivities={setActivities} />
        
        </div>
        <div className="bodyRoutines">
          <Routines routines={routines} setRoutines={setRoutines} />   
         
        </div> */}
    </div>
  );
};

export default Body;
