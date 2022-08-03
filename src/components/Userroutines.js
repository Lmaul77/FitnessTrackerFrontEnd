import React, { useState, useEffect } from "react";
import {
  attachActivityToRoutine,
  getActivities,
  getRoutines,
  getUser,
  getUserRoutines,
} from "../api";

const Userroutines = () => {
  const [privateRoutines, setPrivateRoutines] = useState([]);
  const [activityList, setActivityList] = useState([]);
  const [activity, setActivity] = useState("any");
  const [activityId, setActivityId] = useState("");
  const [activityIdUse, setActivityIdUse] = useState("")
  const [routineId, setRoutineId] = useState("");
  const [count, setCount] = useState("")
  const [duration, setDuration] = useState("")
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function getPageData() {
      const token = localStorage.getItem("token");
      const userData = await getUser(token);
      setUser(userData);
      const routineData = await getRoutines();
      const routineDataId = routineData.id;
      setRoutineId(routineDataId);
      const userRoutines = await getUserRoutines(token, userData.username);
      setPrivateRoutines(userRoutines);
      Promise.all([getActivities()]).then(([activities]) => {
        setActivityList(activities);
      });
    }
    getPageData();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    await attachActivityToRoutine(activityId, count, duration, routineId);
  }

  return (
    <div className="userRoutines">
      {privateRoutines.length ? (
        privateRoutines.map(({ creatorId, name, goal, id, creatorName }) => {
          return (
            <form onSubmit={handleSubmit}>
            <div>
              <div className="singleRoutines" key={id}>
                <div className="creatorName">Creator: {creatorName}</div>
                <h1 id="creatorId">ID: {creatorId}</h1>
                <div className="UserName">{name}</div>
                <div className="UserGoal">{goal}</div>
              </div>
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
              <button type="Submit">ATTACH</button>
            </div>
            </form>
          );
        })
      ) : (
        <div>Loading Your Routines....</div>
      )}
    </div>
  );
};

export default Userroutines;
