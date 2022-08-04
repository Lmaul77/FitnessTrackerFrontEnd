import React, { useState, useEffect } from "react";
import {
  attachActivityToRoutine,
  getActivities,
  getRoutines,
  getUser,
  getUserRoutines,
} from "../api";
import Updateroutine_activities from "./Updateroutine_activities";

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
  const [showAddForm, setShowAddForm] = useState(null);
  const [showActivityForm, setShowActivityForm] = useState(null)
  const [showUpdateForm, setShowUpdateForm] = useState(null)

  useEffect(() => {
    async function getPageData() {
      const token = localStorage.getItem("token");
      const userData = await getUser(token);
      setUser(userData);
      const userRoutines = await getUserRoutines(token, userData.username);
      setPrivateRoutines(userRoutines);
      Promise.all([getActivities()]).then(([activities]) => {
        setActivityList(activities);
      });
    }
    getPageData();
  }, []);
  
// commit comment comment

  async function handleSubmit(event) {
    event.preventDefault();
      const routineId = event.target[0].value
    console.log(activityId, routineId, "INSIDE HANDLE SUBMIT")
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
                <input
                name="routines"
                value={id}
                type="hidden"
                />
                <div className="creatorName">Creator: {creatorName}</div>
                <h1 id="creatorId">ID: {creatorId}</h1>
                <div className="UserName">{name}</div>
                <div className="UserGoal">{goal}</div>
              </div>
              {showAddForm == id ? (
                <>
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
                      {activities.name}{activities.id}
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
              <button onClick={(()=> {
                setShowAddForm(null)
              })}>
                CANCEL 
              </button>
                </>
              ) : (
                <button onClick={() => {
                  setShowAddForm(id) 
                }}>
                    ADD ACTIVITY HERE
                </button>
              )

              }
              {showActivityForm == id ? (
                <>
                {privateRoutines.map((element) => (
                    element.activities.map((activity) => (
                        <>
                        <div>{activity.name}</div>
                        <div>Description: {activity.description}</div>
                        <div>Count: {activity.count}</div>
                        <div>Duration: {activity.duration}</div>
                        <div>Activity Id: {activity.id}</div>
                        {showUpdateForm == id ? (
                <>
                <Updateroutine_activities />
              <button onClick={(()=> {
                setShowUpdateForm(null)
              })}>
                CANCEL 
              </button>
                </>
              ) : (
                <button onClick={() => {
                  setShowUpdateForm(id) 
                }}>
                    UPDATE
                </button>
              )

              }
                        </>
                    ))
                ))
                }
              <button onClick={(()=> {
                setShowActivityForm(null)
              })}>
                CANCEL 
              </button>
                </>
              ) : (
                <button onClick={() => {
                  setShowActivityForm(id) 
                }}>
                    SHOW ACTIVITIES
                </button>
              )

              }
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
