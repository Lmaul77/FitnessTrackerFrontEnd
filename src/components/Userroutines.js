import React, {useState,useEffect} from "react";
import { getUser,getUserRoutines,getActivities } from "../api";
import { SingleRoutine } from "./";




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
            const helloworld = await getActivities()
          
              setActivityList(helloworld);
        }
        getPageData()

    },[])
    return(
        <div>
            {privateRoutines.length ? privateRoutines.map((element)=>{
              return(
              <SingleRoutine routine={element} activityList={activityList}/>
              )
            }): <div>Loading Your Routines....</div>}
        </div>
    )


}


export default UserRoutines;