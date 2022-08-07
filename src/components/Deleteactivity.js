import React from "react";
import { deleteActivityFromRoutine } from "../api";

const Deleteroutine = ({
  routineActivityId,
  privateRoutines,
  setPrivateRoutines,
}) => {
  async function handleDelete(event) {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const deleteActivity = await deleteActivityFromRoutine(
      token,
      routineActivityId
    );
    setPrivateRoutines(
      privateRoutines.filter((routine) => routine !== deleteActivity)
    );
  }

  return (
    <form onSubmit={handleDelete}>
      <button className="Testbutton" id="deleteButton" type="Submit">
        DELETEs
      </button>
    </form>
  );
};

export default Deleteroutine;
