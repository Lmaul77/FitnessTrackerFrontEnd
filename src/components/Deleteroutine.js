import React from 'react';
import { deleteRoutine } from "../api"
import { useNavigate } from 'react-router-dom';

const Deleteroutine = ({id}) => {
    const navigate = useNavigate()
    
    async function handleDelete(event) {
        event.preventDefault()
        const token = localStorage.getItem("token")
        await deleteRoutine(token, id)
        console.log(id, "HOPEFULLY DELETING THIS ROUTING BRO")
    }
    
    return(
        <form onSubmit={handleDelete}>
            <button id="deleteButton" type="Submit">
                DELETE ROUTINE
            </button>
        </form>
    )
}

export default Deleteroutine