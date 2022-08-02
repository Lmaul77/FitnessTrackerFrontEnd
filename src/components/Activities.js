import React, { useEffect } from 'react';
import { getActivities } from '../api';

const Activities = ({activities, setActivities}) => {

useEffect(() => {
    getActivities().then((results) => {
        setActivities(results)
    })
}, [])

const displayActivities = activities.map((activities, index) => {
    return (
        <div className="allActivities" key={index}>
            <div className="nameAllActivities">Name:  {activities.name}</div>
            <div className="descriptionAllActivities">Description:  {activities.description}</div>
        </div>
    )
})

    return (
        <div>
            <h1>
                ACTIVITIES
            </h1>
            <div>
                {displayActivities}
            </div>
        </div>
    )
}

export default Activities