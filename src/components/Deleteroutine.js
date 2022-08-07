import React from 'react';
import { deleteRoutine } from "../api"
import { useNavigate } from 'react-router-dom';

const Deleteroutine = ({id, privateRoutines, setPrivateRoutines}) => {
    const navigate = useNavigate()
    
    async function handleDelete(event) {
        event.preventDefault()
        const token = localStorage.getItem("token")
        const freshRoutine = await deleteRoutine(token, id)
        setPrivateRoutines(privateRoutines.filter(routine => routine !== freshRoutine))
    }
    
    return(
        <form onSubmit={handleDelete}>
            <button className="Testbutton" id="deleteButton" type="Submit">
                (-)ROUTINE
            </button>
        </form>
    )
}

export default Deleteroutine