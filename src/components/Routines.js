import React, { useEffect } from "react";
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
            <div className="SingleActivity" key={`Routine ${index}`}>
                <div className="creatorRoutines">Creator: {element.creatorName}</div>
                <div className = "nameAllRoutines">{element.name}</div>
                <div className = "routineGoal"> Goal: {element.goal}</div>
                <div className="routineIsPublic">{element.IsPublic}</div>
                {/* <div className="updateAllRoutines"><Updateroutines id={element.id}/></div> */}
            </div>

        )
    })
    return(
        <div className = "allRoutines">
            <div className="routinesHeader">
                ALL ROUTINES
            </div>
            <div >
                {displayRoutines}
            </div>
        </div>
    )
}

export default Routines 