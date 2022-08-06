import React, { useState } from "react";
import { attachActivityToRoutine } from "../api";

const AttachRoutine = ({ activityList, routineId, privateRoutines, setPrivateRoutines }) => {
  const [activity, setActivity] = useState([]);
  const [count, setCount] = useState("");
  const [duration, setDuration] = useState("");
  const [showAddForm, setShowAddForm] = useState(null);  

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(activity, "THIS IS THE ACTIVITY")
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
                  console.log(count, "Line 44");
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
                  console.log(duration, "Line 56");
                }}
              />
            </label>
            <button type="Submit">ATTACH</button>
            <button
              onClick={() => {
                setShowAddForm(null);
              }}
            >
              CANCEL
            </button>
          </form>
        </>
      ) : (
        <button
          onClick={() => {
            setShowAddForm(routineId);
          }}
        >
          ADD ACTIVITY HERE
        </button>
      )}

    </div>
  );
};

export default AttachRoutine;
