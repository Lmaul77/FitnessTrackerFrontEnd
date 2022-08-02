import React from "react";
import { Routines, Activities, Createactivities, CreateRoutine } from "./";
import { Route, Routes } from "react-router-dom";

const Body = ({
  activities,
  setActivities,
  routines,
  setRoutines,
  nameInput,
  setNameInput,
  descriptionInput,
  setDescriptionInput,
  routineName,
  setRoutineName,
  routineGoal,
  setRoutineGoal,
}) => {
  return (
    <div>
      <div>
        <form>
          <button>Create</button>
          <button>Delete</button>
        </form>
        <div className="bodyActivites">
          <div>
            <Activities activities={activities} setActivities={setActivities} />
          </div>
          <button>
            {" "}
            CREATE
            <Createactivities
              activities={activities}
              setActivities={setActivities}
              nameInput={nameInput}
              setNameInput={setNameInput}
              descriptionInput={descriptionInput}
              setDescriptionInput={setDescriptionInput}
            />
          </button>
        </div>
        <div>
          <Routines routines={routines} setRoutines={setRoutines} />
          <button>
            <CreateRoutine
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
