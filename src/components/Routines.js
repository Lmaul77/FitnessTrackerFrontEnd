import React, {useState,useEffect} from "react";
import { getRoutines } from "../api";
import { Updateroutines } from './';



const Routines = ({routines,setRoutines})=>{
    useEffect(()=>{
        getRoutines().then((results)=>{
            setRoutines(results)
        })
    },[])
    const displayRoutines = routines.map((element,index)=>{
        return(
            <div className = "allRoutines" key={index}>
                <div className = "nameAllRoutines">Name: {element.name}</div>
                <div className = "routineGoal"> Goal: {element.goal}</div>
                <div className="routineIsPublic">IsPublic: {element.IsPublic}</div>
                <div><Updateroutines id={element.id}/></div>
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