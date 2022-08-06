import React from "react";
import { useNavigate } from "react-router-dom";
import { createActivities } from "../api";

const Createactivities = ({
  activityName,
  setActivityName,
  activityDescription,
  setActivityDescription,
  activities,
  setActivities,
}) => {
  const Navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const newActivity = await createActivities(
      token,
      activityName,
      activityDescription
    );
    setActivities([newActivity, ...activities]);
    Navigate("/userRoutines");
  }

  return (
    <div id="addActivity">
      <div className="createActivityHeader">
        Add A New Activity
      </div>
      <form  onSubmit={handleSubmit}>
        <div>
          <input
            id="AddName"
            placeholder="Name"
            value={activityName}
            onChange={(event) => {
              setActivityName(event.target.value);
            }}
          />
        </div>
        <div>
          <input
            id="AddDescription"
            placeholder="Description"
            value={activityDescription}
            onChange={(event) => {
              setActivityDescription(event.target.value);
            }}
          />
        </div>
        <button id="addActivityButton" type="Submit">
          CREATE
        </button>
      </form>
    </div>
  );
};

export default Createactivities;
