import React, {useState,useEffect} from "react";
import { getUser,getUserRoutines,getActivities } from "../api";
import { AttachRoutine, UpdateRoutine_Activities,Updateactivities } from "./";




const UserRoutines = ()=>{
    const [privateRoutines, setPrivateRoutines] = useState([])
    const [user,setUser] = useState([])
    const [activityList, setActivityList] = useState([]);
    useEffect(()=>{
        async function getPageData() {
            const token = localStorage.getItem("token");
            const userData = await getUser(token)
            setUser(userData)
            const userRoutines = await  getUserRoutines(token, userData.username)
            setPrivateRoutines(userRoutines)
            Promise.all([getActivities()]).then(([activities]) => {
              setActivityList(activities);})
        }
        getPageData()

    },[])
    return(
        <div>
            {privateRoutines.length ? privateRoutines.map(({creatorId, name, goal, id, activities,creatorName})=>{
                return(
                  <div className="allRoutines" key={`${id}`}>
                  <h2 className="nameAllRoutines">Name: {name}</h2>
                  <h3>Goal: {goal}</h3>
                  <h5 className="creatorRoutines">Creator: {creatorId} </h5> 
                   
                   <AttachRoutine activityList={activityList} routineId={id}/>
                    
                  <div className="routine_activities">
                  
                    { activities ? activities.map((activity, index) => (
                      <div key={`allRoutinesActs: ${activity.id}`}>
                        <h4>Activity Name: {activity.name}</h4>
                        <ul>
                          <li>Description: {activity.description}</li>
                          <li>Count: {activity.count} </li>
                          <li>Duration: {activity.duration}</li>
                        </ul>
                        <div><UpdateRoutine_Activities id={id} username={creatorName} routineActivityId={activity.routineActivityId}/></div>
                      </div>
                    )): <div> send help</div>}
                  </div>
                </div>)
            }): <div>Loading Your Routines....</div>}
        </div>
    )


}


export default UserRoutines;