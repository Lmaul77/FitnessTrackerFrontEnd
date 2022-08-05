import React from "react";
import { deleteActivityFromRoutine, deleteRoutine } from "../api";
import { useNavigate } from "react-router-dom";

const Deleteroutine = ({ routineActivityId }) => {
  const navigate = useNavigate();

  async function handleDelete(event) {
    event.preventDefault();
    const token = localStorage.getItem("token");
    await deleteActivityFromRoutine(token, routineActivityId);
    console.log(routineActivityId, "HOPEFULLY DELETING THIS ROUTING BRO")
    navigate("/userRoutines");
  }

  return (
    <form onSubmit={handleDelete}>
      <button id="deleteButton" type="Submit">
        DELETE
      </button>
    </form>
  );
};

export default Deleteroutine;
