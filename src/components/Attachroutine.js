import React, { useState, useEffect } from "react";
import { getRoutines, attachActivityToRoutine } from "../api";
import { Updateroutine_activities } from "./";

const AttachRoutine = ({ activityList, routineId }) => {
  const [privateRoutines, setPrivateRoutines] = useState([]);
  const [activityId, setActivityId] = useState("");
  const [count, setCount] = useState("");
  const [duration, setDuration] = useState("");
  const [showAddForm, setShowAddForm] = useState(null);
  const [showActivityForm, setShowActivityForm] = useState(null);
  const [showUpdateForm, setShowUpdateForm] = useState(null);
  

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(activityId, routineId, "INSIDE HANDLE SUBMIT");
    await attachActivityToRoutine(activityId, count, duration, routineId);
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
                value={activityId}
                onChange={(event) => {
                  setActivityId(event.target.value);
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
