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
        <div className='SingleActivity'  key={`Activity ${index}`}>
            <div className="nameAllActivities">Name: {element.name}</div>
            <div className="descriptionAllActivities">Description: {element.description}</div>
            <div className="updateAllActivities"><Updateactivities id={element.id}/></div>
        </div>
    )
})

    return (
        <div className="allActivities">
            <div className="activitiesHeader">
                ACTIVITIES
            </div>
            <div>
                {displayActivities}
            </div>
        </div>
    )
}

export default Activities