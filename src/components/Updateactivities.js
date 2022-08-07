import { useState } from "react";
import { updateActivity } from "../api";

const Updateactivities = ({id}) => {
  const [activityName, setActivityName] = useState("");
  const [activityDescription, setActivityDescription] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const token = localStorage.getItem("token");
    await updateActivity(token, activityName, activityDescription, id);
    console.log(id, "UPDATING ACTIVITIES HOPEFULLY")
  }

  return (
    <div id="updateActivitiesBox">
      <div>
        <h1>Update Activity</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            id="updateActivityName"
            placeholder="name"
            value={activityName}
            onChange={(event) => {
              setActivityName(event.target.value);
            }}
          />
        </div>
        <div>
          <input
            id="updateActivityDescription"
            placeholder="description"
            value={activityDescription}
            onChange={(event) => {
              setActivityDescription(event.target.value);
            }}
          />
        </div>
        <button className="Testbutton" id="updateActivityButton" type="Submit">
          SAVE
        </button>
      </form>
    </div>
  );
};

export default Updateactivities;
