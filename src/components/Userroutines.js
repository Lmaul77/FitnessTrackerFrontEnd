import React, { useState, useEffect } from "react";
import {
  attachActivityToRoutine,
  getActivities,
  getRoutines,
  getUser,
  getUserRoutines,
} from "../api";
import {Updateroutine_activities, AttachRoutine} from "./";


const Userroutines = () => {
  const [privateRoutines, setPrivateRoutines] = useState([]);
  const [activityList, setActivityList] = useState([]);
  const [activity, setActivity] = useState("any");
  const [activityId, setActivityId] = useState("");
  const [activityIdUse, setActivityIdUse] = useState("");
  const [routineId, setRoutineId] = useState("");
  const [count, setCount] = useState("");
  const [duration, setDuration] = useState("");
  const [user, setUser] = useState([]);
  const [showAddForm, setShowAddForm] = useState(null);
  const [showActivityForm, setShowActivityForm] = useState(null);
  const [showUpdateForm, setShowUpdateForm] = useState(null);

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


  return (
    <div className="userRoutines">
      {privateRoutines.length ? (
        privateRoutines.map(({ creatorId, name, goal, id, creatorName }) => {
          return (
          
              <div>
                <div className="singleRoutines" key={id}>
                  <input name="routines" value={id} type="hidden" />
                  <div className="creatorName">Creator: {creatorName}</div>
                  <h1 id="creatorId">ID: {creatorId}</h1>
                  <div className="UserName">{name}</div>
                  <div className="UserGoal">{goal}</div>
                  <div className="routineId">{id}</div>
                </div>
                {showActivityForm == id ? (
                  <>
                    {privateRoutines.map((element) =>
                      element.activities.map((activity) => (
                        <>
                          <div>{activity.name}</div>
                          <div>Description: {activity.description}</div>
                          <div>Count: {activity.count}</div>
                          <div>Duration: {activity.duration}</div>
                          <div>Activity Id: {activity.id}</div>
                          <AttachRoutine routineId={id}  activityList= {activityList} />
                          {showUpdateForm == id ? (
                            <>
                              <Updateroutine_activities />
                              <button
                                onClick={() => {
                                  setShowUpdateForm(null);
                                }}
                              >
                                CANCEL
                              </button>
                            </>
                          ) : (
                            <button
                              onClick={() => {
                                setShowUpdateForm(id);
                              }}
                            >
                              UPDATE
                            </button>
                          )}
                        </>
                      ))
                    )}
                    <button
                      onClick={() => {
                        setShowActivityForm(null);
                      }}
                    >
                      CANCEL
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      setShowActivityForm(id);
                    }}
                  >
                    SHOW ACTIVITIES
                  </button>
                )}
              </div>
          
          );
        })
      ) : (
        <div>Loading Your Routines....</div>
      )}
    </div>
  );
};

export default Userroutines;
