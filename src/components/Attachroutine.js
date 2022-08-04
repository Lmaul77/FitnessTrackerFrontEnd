import React, {useState,useEffect} from "react";
import { getRoutines } from "../api";

const Attachroutine = ({routines,setRoutines})=>{
    useEffect(()=>{
        getRoutines().then((results)=>{
            setRoutines(results)
        })
    },[])
    const displayRoutines = routines.map((element,index)=>{
        return(
            <div className = "allRoutines" key={`Routine ${index}`}>
                <div className="creatorRoutines">Creator: {element.creatorName}</div>
                <div className = "nameAllRoutines">{element.name}</div>
                <div className = "routineGoal"> Goal: {element.goal}</div>
                <div className="routineIsPublic">{element.IsPublic}</div>
            </div>

        )
    })
    return(
        <div>
            <div className="routinesHeader">
                ROUTINES
            </div>
            <div>
                {displayRoutines}
            </div>
        </div>
    )
}

export default Attachroutine
