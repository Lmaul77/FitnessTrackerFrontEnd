import react, { useState } from "react";
import {
  updateRoutineActivities,
  updateActivity,
  getUserRoutines,
} from "../api";
// ITS TRYING TO PUSH ROUTINE ID WHEN I NEED ROUTINEACITIVITYID INSIDE ACTIVITIES ARRAY
const UpdateRoutine_Activities = ({id, username, routineActivityId}) => {
  const [updateDuration, setUpdateDuration] = useState("");
  const [updateCount, setUpdateCount] = useState("");

  async function handleUpdatingRoutineActivities(event){
    event.preventDefault();
    const token = localStorage.getItem("token");
    const myRoutines = await getUserRoutines(token, username )
    await updateRoutineActivities(
      token,
      routineActivityId,
      updateCount,
      updateDuration
    );
    
    console.log(id, routineActivityId, "UPDATING ROUTINE ACTIVITIES HOPEFULLY")
    }

  return (
    <div>
      <h1>UPDATE COUNT AND DURATION</h1>

      <form onSubmit={handleUpdatingRoutineActivities}>
        <input
          value={updateCount}
          type="text"
          placeholder="New Count"
          onChange={(event) => {
            setUpdateCount(event.target.value);
          }}
        ></input>
        <input
          value={updateDuration}
          type="text"
          placeholder="New Duration"
          onChange={(event) => {
            setUpdateDuration(event.target.value);
          }}
        ></input>
        <button type="submit">Update Count and Duration</button>
      </form>
    </div>
  );
};

export default UpdateRoutine_Activities;
