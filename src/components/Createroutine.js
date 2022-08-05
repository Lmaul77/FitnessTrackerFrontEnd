import { useNavigate } from "react-router-dom";
import { createRoutine } from "../api";
const Createroutine = ({
  routineName,
  setRoutineName,
  routineGoal,
  setRoutineGoal,
  routines,
  setRoutines,
}) => {
  const Navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const newRoutine = await createRoutine(token, routineName, routineGoal);
    setRoutines([newRoutine, ...routines]);
    Navigate("/userRoutines");
  };

  return (
    <div id="NewRoutine">
      <div>
        <h1>Create a New Routine</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            id="Name input"
            placeholder="Name"
            value={routineName}
            onChange={(event) => {
              setRoutineName(event.target.value);
            }}
          />
        </div>
      </form>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              id="Goal Input"
              placeholder="Goal"
              value={routineGoal}
              onChange={(event) => {
                setRoutineGoal(event.target.value);
              }}
            />
          </div>
          <button id="addRoutinebutton" type="submit">
            CREATE A ROUTINE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Createroutine;
