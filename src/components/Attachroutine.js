import React, { useState } from "react";
import { attachActivityToRoutine } from "../api";

const AttachRoutine = ({ activityList, routineId, thisRoutine, setThisRoutine }) => {
  const [activity, setActivity] = useState([]);
  const [count, setCount] = useState("");
  const [duration, setDuration] = useState("");
  const [showAddForm, setShowAddForm] = useState(null);  

  async function handleSubmit(event) {
    event.preventDefault();
    const newRoutineActivity = await attachActivityToRoutine(activity[1], count, duration, routineId);
    newRoutineActivity.name = activity[0]
    newRoutineActivity.description = activity[2]
    newRoutineActivity.routineActivityId = activity[3]
    setThisRoutine({...thisRoutine, activities: [...thisRoutine.activities, newRoutineActivity] })
  }
  return (
    <div>
      {showAddForm == routineId ? (
        <>
          <form onSubmit={handleSubmit}>
              <label htmlFor="select-activity">
                Activities{" "}
                <span className="activities-count">
                  ({activityList.length})
                </span>
              </label>
              <select
                id="select-activity"
                onChange={(event) => {
                  console.log(event.target.value.split(","))
                  setActivity(event.target.value.split(","));
                }}
              >
                {activityList.map((activity, idx) => {
                  console.log(activity, "HERE IS THE ACTIVITY")
                  return(
                  <option
                    key={`${idx}:${activity.name}`}
                    value={`${activity.name}, ${activity.id}, ${activity.description}, ${activity.routineActivityId}`}
                  >
                    {activity.name}
                  </option>
                  )}
                )}
              </select>
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
