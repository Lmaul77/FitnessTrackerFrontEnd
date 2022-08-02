import React, { useEffect } from 'react';
import { getActivities } from '../api';
import { Updateactivities } from './';

const Activities = ({activities, setActivities}) => {

useEffect(() => {
    getActivities().then((results) => {
        setActivities(results)
    })
}, [])

const displayActivities = activities.map((element, index) => {
    return (
        <div className="allActivities" key={index}>
            <div className="nameAllActivities">Name:  {element.name}</div>
            <div className="descriptionAllActivities">Description:  {element.description}</div>
            <div><Updateactivities id={element.id}/></div>
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