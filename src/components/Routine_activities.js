import { useEffect } from "react";
import { getRoutines } from "../api";
const RoutineActivities = ({ routines, setRoutines }) => {
  useEffect(() => {
    getRoutines().then((results) => {
      setRoutines(results);
    });
  }, []);
  return (
    
    <div className="RoutineActivitiesBody">
      <h1 className="RoutineActivitiesHeader">LIST OF AVAILABLE ROUTINES</h1>
      
      {routines.map((routine, index) => {
        return (
          <div className="testing">
          <div className="Routine_Activities_ROUTINE" key={`allRoutines: ${index}`}>
            <h2 className="RoutineActivitiesName">Name: {routine.name}</h2>
            <h3>Goal: {routine.goal}</h3>
            <h4 className="RoutineActivitiesCreator">Creator: {routine.creatorName} </h4>
            </div>
            <div className="Routine_Activities_ACTIVITY">
              {routine.activities.map((activity, index) => (
                <div className="SingeActivitytest" key={`allRoutinesActs: ${activity.id}`}>
                  <h4 className="SingleActivityName">Activity Name: {activity.name}</h4>
                  <ul>
                    <li>Description: {activity.description}</li>
                    <li>Count: {activity.count} </li>
                    <li>Duration: {activity.duration}</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
    
  );
};

export default RoutineActivities;
