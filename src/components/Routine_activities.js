import react, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Routineactivities = () => {
    const [routineActivities, setRoutineActivities] = useState([])

    useEffect(()=> {
        async function getRoutineActivityData() {
            const token = localStorage.getItem("token")
            const {id} = useParams()
            
        }
    })

    // return (

    // )
}

export default Routineactivities