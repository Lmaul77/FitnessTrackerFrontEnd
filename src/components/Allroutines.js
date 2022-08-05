import React, {useState,useEffect} from "react";
import { getRoutines } from "../api";
import { Updateroutines } from './';



const Allroutines = ({element})=>{
        return(
            <div className="allRoutines">
                <div className="creatorRoutines">Creator: {element.creatorName}</div>
                <div className = "nameAllRoutines">{element.name}</div>
                <div className = "routineGoal"> Goal: {element.goal}</div>
                <div className="routineIsPublic">{element.IsPublic}</div>
            </div>
        )
}

export default Allroutines 