import React from "react";
import { Routines, Activities,CreateRoutine } from "./";
import { Route, Routes } from "react-router-dom";

const Body = ({ activities, setActivities, routines, setRoutines, name, setName,goal,setGoal}) => {
  return (
    <div>
      <div>
        <form>
          <button>Create</button>
          <button>Delete</button>
        </form>
        <div>
          <Activities activities={activities} setActivities={setActivities} />
        </div>
        <div>
          <Routines routines={routines} setRoutines={setRoutines} />
          <button>
            <CreateRoutine name={name} setName={setName} goal= {goal} setGoal={setGoal} routines={routines} setRoutines={setRoutines}/>
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
