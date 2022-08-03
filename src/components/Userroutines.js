import React, {useState,useEffect} from "react";
import { getUser,getUserRoutines } from "../api";




const UserRoutines = ()=>{
    let token = localStorage.getItem("token");
    let user = await getUser(token)
    let username = user.username
    const myRoutines = await getUserRoutines(token, username)
           
    return(
       <div>
        <h1> MY ROUTINES </h1>
        {myRoutines}
       </div>
    )


}


export default UserRoutines;