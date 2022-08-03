import React from "react";
import {
  Routines,
  Activities,
  Createactivities,
  Createroutine,
  Updateactivities,
  Updateroutines,
  Userroutines,
  Profilebar
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
      <Profilebar/>
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
     
        <div className="bodyActivities">
            <Activities activities={activities} setActivities={setActivities} />
        
        </div>
        <div className="bodyRoutines">
          <Routines routines={routines} setRoutines={setRoutines} />   
         
        </div>
        
      </div>
  );
};

export default Body;
