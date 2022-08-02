import React, {useState,useEffect} from "react";
import { getRoutines, getUserInfo } from "../api";



const Routines = ({routines,setRoutines})=>{
    useEffect(()=>{
        getRoutines().then((results)=>{
            setRoutines(results)
        })
    },[])
    const displayRoutines = routines.map((routines,index)=>{
        return(
            <div className = "allRoutines" key={index}>
                <div className = "nameAllRoutines">Name: {routines.name}</div>
                <div className = "routineGoal"> Goal: {routines.goal}</div>

            </div>

        )
    })
    return(
        <div>
            <h1>
                ROUTINES
            </h1>
            <div>
                {displayRoutines}
            </div>
        </div>
    )
}

export default Routines 