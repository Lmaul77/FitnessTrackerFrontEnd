import React from 'react';
import { deleteRoutine } from "../api"

const Deleteroutine = () => {
    
    async function handleDelete(event) {
        event.preventDefault()
        const token = localStorage.getItem("token")
        await deleteRoutine(token, id)
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