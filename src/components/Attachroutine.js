import React, { useState } from "react";
import { attachActivityToRoutine } from "../api";

const AttachRoutine = ({ activityList, routineId, privateRoutines, setPrivateRoutines }) => {
  const [activity, setActivity] = useState([]);
  const [count, setCount] = useState("");
  const [duration, setDuration] = useState("");
  const [showAddForm, setShowAddForm] = useState(null);  

  async function handleSubmit(event) {
    event.preventDefault();
    const newRoutineActivity = await attachActivityToRoutine(activity, count, duration, routineId);
    setPrivateRoutines(privateRoutines.filter(routine => routine !== newRoutineActivity))
  }
  return (
    <div>
      {showAddForm == routineId ? (
        <>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <label htmlFor="select-activity">
                Activities{" "}
                <span className="activities-count">
                  ({activityList.length})
                </span>
              </label>
              <select
                name="activities"
                id="select-activity"
                value={activity}
                onChange={(event) => {
                  setActivity(event.target.value);
                }}
              >
                <option value="any">Any</option>
                {activityList.map((activities, idx) => (
                  <option
                    key={`${idx}:${activities.name}`}
                    value={activities.id}
                  >
                    {activities.name}
                    {activities.id}
                  </option>
                ))}
              </select>
            </fieldset>
            <label>
              Count:
              <input
                name="count"
                type="text"
                value={count}
                onChange={(event) => {
                  setCount(event.target.value);
                }}
              />
            </label>

            <label>
              Duration:
              <input
                name="duration"
                type="text"
                value={duration}
                onChange={(event) => {
                  setDuration(event.target.value);
                }}
              />
            </label>
            <button className="Testbutton" type="Submit">ATTACH</button>
            <button className="Testbutton"
              onClick={() => {
                setShowAddForm(null);
              }}
            >
              CANCEL
            </button>
          </form>
        </>
      ) : (
        <button className="Testbutton"
          onClick={() => {
            setShowAddForm(routineId);
          }}
        >
          (+)ACTIVITY
        </button>
      )}

    </div>
  );
};

export default AttachRoutine;
