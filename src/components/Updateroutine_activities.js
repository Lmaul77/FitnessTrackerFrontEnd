import react, { useState } from "react";
import { updateRoutineActivities } from "../api";

const Updateroutine_activities = ({id}) => {
    const [count, setCount] = useState("")
    const[duration, setDuration] = useState("")

    async function handleSubmit(event) {
        event.preventDefault();
        const token = localStorage.getItem("token")
        await updateRoutineActivities(token, id, count, duration);
    }

    
    return (
        <div id="updateRoutine_ActivitiesBox">
        <div>
            <h1>Update RoutineActivities</h1>
        </div>
        <form onSubmit={handleSubmit}>
        <div>
            <input 
            id="updateCount"
            placeholder="count"
            value={count}
            onChange={(event) => {
                setCount(event.target.value)
            }}
            />
        </div>
        <div>
            <input 
            id="updateDuration"
            placeholder="duration"
            value={duration}
            onChange={(event) => {
                setDuration(event?.target.value)
            }}
            />
        </div>
        <button id="updateRoutineActivitiesButton" type="Submit">
            UPDATE
        </button>
        </form>
        </div>
    )    
    
}

export default Updateroutine_activities
