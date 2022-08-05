import React from 'react';
import { deleteActivityFromRoutine, deleteRoutine } from "../api"

const Deleteroutine = ({routineActivityId}) => {
    
    async function handleDelete(event) {
        event.preventDefault()
        const token = localStorage.getItem("token")
        await deleteActivityFromRoutine(token, routineActivityId)
        console.log(routineActivityId, "HOPEFULLY DELETING THIS ROUTING BRO")
    }
    
    return(
        <form onSubmit={handleDelete}>
            <button id="deleteButton" type="Submit">
                DELETE
            </button>
        </form>
    )
}

export default Deleteroutine