import React from "react";
import { Routines, Activities, Createactivities, Createroutine, Updateactivities, Updateroutines } from "./";
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
        <form>
          <button>Create</button>
          <button>Delete</button>
        </form>
        <div className="bodyActivities">
          <div>
            <Activities activities={activities} setActivities={setActivities} />
            <Updateactivities />
          </div>
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

        <form>
          <div></div>
          <button>Create</button>
          <button>Delete</button>
        </form>
      </div>
    </div>
  );
};

export default Body;
