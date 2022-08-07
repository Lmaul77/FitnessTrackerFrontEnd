import React from "react";
import { deleteRoutine } from "../api";

const Deleteroutine = ({ id, privateRoutines, setPrivateRoutines }) => {
  async function handleDelete(event) {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const freshRoutine = await deleteRoutine(token, id);
    setPrivateRoutines(
      privateRoutines.filter((routine) => routine !== freshRoutine)
    );
  }

  return (
    <form onSubmit={handleDelete}>
      <button className="Testbutton" id="deleteButton" type="Submit">
        (-)ROUTINE
      </button>
    </form>
  );
};

export default Deleteroutine;
