import React from "react";
import { Routines, Activities } from "./";
import { Route, Routes } from "react-router-dom";

const Body = ({ activities, setActivities, routines, setRoutines }) => {
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
