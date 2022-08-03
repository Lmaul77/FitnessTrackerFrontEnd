import React, {useState,useEffect} from "react";
import { getUser,getUserRoutines } from "../api";




const UserRoutines = ()=>{
    const [privateRoutines, setPrivateRoutines] = useState([])
    const [user,setUser] = useState([])
    useEffect(()=>{
        async function getPageData() {
            const token = localStorage.getItem("token");
            const userData = await getUser(token)
            setUser(userData)
            const userRoutines = await  getUserRoutines(token, userData.username)
            setPrivateRoutines(userRoutines)
        }
        getPageData()

    },[])
    return(
        <div>
            {privateRoutines.length ? privateRoutines.map(({creatorId, name, goal, id})=>{
                return(
                    <div className= "UserRoutines" key={id}>
                        <h1 id="creatorId">{creatorId}</h1>
                        <div className= "UserName">
                        {name}</div>
                        <div className= "UserGoal">
                        {goal}</div>

                    </div>
                )
            }): <div>Loading Your Routines....</div>}
        </div>
    )


}


export default UserRoutines;