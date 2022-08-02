import React from "react";
import { useNavigate } from "react-router-dom";
import { createActivities } from "../api";

const Createactivities = ({
  nameInput,
  setNameInput,
  descriptionInput,
  setDescriptionInput,
  activities,
  setActivities,
}) => {
  const Navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const newActivity = await createActivities(
      token,
      nameInput,
      descriptionInput
    );
    setActivities([newActivity, ...activities]);
    Navigate("/");
  }

  return (
    <div id="addActivity">
      <div>
        <h1>Add A New Activity</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            id="AddName"
            placeholder="Name"
            value={nameInput}
            onChange={(event) => {
              setNameInput(event.target.value);
            }}
          />
        </div>
        <div>
          <input
            id="AddDescription"
            placeholder="Description"
            value={descriptionInput}
            onChange={(event) => {
              setDescriptionInput(event.target.value);
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

export default Createactivities
