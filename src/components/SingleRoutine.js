import React, { useState } from "react";
import { AttachRoutine, Deleteactivity, Deleteroutine, UpdateRoutine_Activities } from './';



const SingleRoutine = ({routine, activityList})=>{
    const [thisRoutine, setThisRoutine] = useState(routine)
    const {creatorId, name, goal, id, activities,creatorName} = thisRoutine
    return(
        <div className="RoutineActivitiesBody">
      <div className="Routine_Activities_ROUTINE" key={`${id}`}>
      <h2 className="SingleUserRoutine">Name: {name}</h2>
      <h3>Goal: {goal}</h3>
      <h5 className="RoutineActivitiesCreator">Creator: {creatorId} </h5> 
       <AttachRoutine thisRoutine={thisRoutine} setThisRoutine={setThisRoutine} activityList={activityList} routineId={id}/>
         <Deleteroutine id={id}/> 
      <div className="Routine_Activities_ACTIVITY">
        { activities ? activities.map((activity, index) => (
          <div key={`allRoutinesActs: ${activity.id}`}>
            <h4 className="SingleActivityName">Activity Name: {activity.name}</h4>
            <ul>
              <li>Description: {activity.description}</li>
              <li>Count: {activity.count} </li>
              <li>Duration: {activity.duration}</li>
            </ul>
            <div><UpdateRoutine_Activities id={id} username={creatorName} routineActivityId={activity.routineActivityId}/></div>
            <Deleteactivity routineActivityId={activity.routineActivityId} />
          </div>
        )): <div> send help</div>}
      </div>
    </div>
    </div>
    )
}

export default SingleRoutine;