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
      <Profilebar/>
        <div className="bodyActivities">
            <Activities activities={activities} setActivities={setActivities} />
            <Updateactivities />
          <button>
            <Createactivities
              activities={activities}
              setActivities={setActivities}
              activityName={activityName}
              setActivityName={setActivityName}
              activityDescription={activityDescription}
              setActivityDescription={setActivityDescription}
            />
          </button>
        </div>
        <div className="bodyRoutines">
          <Routines routines={routines} setRoutines={setRoutines} />
          <Updateroutines />
          <button>
            <Createroutine
              routineName={routineName}
              setRoutineName={setRoutineName}
              routineGoal={routineGoal}
              setRoutineGoal={setRoutineGoal}
              routines={routines}
              setRoutines={setRoutines}
            />
          </button>
        </div>
        {/* <Userroutines /> */}
      </div>
  );
};

export default Body;
