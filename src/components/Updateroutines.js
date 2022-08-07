import { useState } from "react";
import { updateRoutine } from "../api";


const Updateroutines = ({id}) => {
  const [routineName, setRoutineName] = useState("");
  const [routineGoal, setRoutineGoal] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const token = localStorage.getItem("token");
    await updateRoutine(token, routineName, routineGoal, id);
  }

  return (
    <div id="updateRoutineBox">
      <div>
        <h1>Update Routine</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            id="updateRoutineName"
            placeholder="name"
            value={routineName}
            onChange={(event) => {
              setRoutineName(event.target.value);
            }}
          />
        </div>
        <div>
          <input
            id="updateRoutineGoal"
            placeholder="goal"
            value={routineGoal}
            onChange={(event) => {
              setRoutineGoal(event.target.value);
            }}
          />
        </div>
        <button className="Testbutton" id="updateRoutineButton" type="Submit">
          SAVE
        </button>
      </form>
    </div>
  );
};

export default Updateroutines;