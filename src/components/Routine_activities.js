import { useEffect } from "react";
import { getRoutines } from "../api";
const RoutineActivities = ({ routines, setRoutines }) => {
  useEffect(() => {
    getRoutines().then((results) => {
      setRoutines(results);
      console.log(results, "show me line 9");
    });
  }, []);
  return (
    <div className="allRoutines">
      <h1 className="routinesHeader">LIST OF AVAILABLE ROUTINES</h1>
      {routines.map((routine, index) => {
        return (
          <div className="allRoutines" key={`allRoutines: ${index}`}>
            <h2 className="nameAllRoutines">Name: {routine.name}</h2>
            <h3>Goal: {routine.goal}</h3>
            <h5 className="creatorRoutines">Creator: {routine.creatorName} </h5>
            <div className="routine_activities">
              {routine.activities.map((activity, index) => (
                <div key={`allRoutinesActs: ${activity.id}`}>
                  <h4>Activity Name: {activity.name}</h4>
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
