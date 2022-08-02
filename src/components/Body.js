import React from "react";
import { Routines, Activities, Createactivities } from "./";
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
          <button> CREATE
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

        <div className="bodyRoutines">
          <div>
            <Routines routines={routines} setRoutines={setRoutines} />
          </div>
          <button></button>
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
