import React from 'react';
import { attachActivityToRoutine } from '../api';

const Attachactivitytoroutine = () => {
    
    async function handleSubmit(event) {
        event.preventDefault()
        const token = localStorage.getItem("token")
        await attachActivityToRoutine(token, activityId, count, duration)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <button id="attachButton" type="Submit">
                ATTACH
            </button>
        </form>
    )
}

export default Attachactivitytoroutine