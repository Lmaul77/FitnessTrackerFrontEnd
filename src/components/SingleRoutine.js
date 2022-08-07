import React from "react";
import {
  AttachRoutine,
  Deleteactivity,
  Deleteroutine,
  UpdateRoutine_Activities,
} from "./";

const SingleRoutine = ({
  routine,
  activityList,
  privateRoutines,
  setPrivateRoutines,
}) => {
  const { creatorId, name, goal, id, activities, creatorName } = routine;

  return (
    <div className="UserRoutineActivitiesBody">
      <div className="UserRoutine_Activities_ROUTINE" key={`${id}`}>
        <h2 className="SingleUserRoutine">Name: {name}</h2>
        <h3>Goal: {goal}</h3>
        <h5 className="RoutineActivitiesCreator">Creator: {creatorId} </h5>
        <AttachRoutine
          activityList={activityList}
          routineId={id}
          privateRoutines={privateRoutines}
          setPrivateRoutines={setPrivateRoutines}
        />
        <Deleteroutine
          id={id}
          privateRoutines={privateRoutines}
          setPrivateRoutines={setPrivateRoutines}
        />
        <div className="Routine_Activities_ACTIVITY">
          {activities ? (
            activities.map((activity, index) => (
              <div key={`allRoutinesActs: ${activity.id}`}>
                <h4 className="SingleActivityName">
                  Activity Name: {activity.name}
                </h4>
                <ul>
                  <li>Description: {activity.description}</li>
                  <li>Count: {activity.count} </li>
                  <li>Duration: {activity.duration}</li>
                </ul>
                <div>
                  <UpdateRoutine_Activities
                    id={id}
                    username={creatorName}
                    routineActivityId={activity.routineActivityId}
                    privateRoutines={privateRoutines}
                    setPrivateRoutines={setPrivateRoutines}
                  />
                </div>
                <Deleteactivity
                  routineActivityId={activity.routineActivityId}
                  privateRoutines={privateRoutines}
                  setPrivateRoutines={setPrivateRoutines}
                />
              </div>
            ))
          ) : (
            <div> send help</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleRoutine;
