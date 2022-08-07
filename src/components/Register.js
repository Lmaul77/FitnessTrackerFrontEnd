import React, { useState } from "react";
import { registerUser } from "../api";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = await registerUser(username, password);
    localStorage.setItem("token", token);
    setUsername("");
    setPassword("");
  };

  return (
    <div id="RegisterBoxCenter">
      <div id="RegisterBox">
        <div>
          <h1 id="RegisterMessage">Create Your New Fitness Tracker Account</h1>
        </div>
        <form id="REGISTRATION" onSubmit={handleSubmit}>
          <div>
            <fieldset>
              <label>
                <input
                  id="RUsername"
                  name="USERNAME"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(event) => {
                    setUsername(event.target.value);
                    console.log(username);
                  }}
                />
              </label>
            </fieldset>
            <fieldset>
              <label>
                <input
                  id="RPassword"
                  name="PASSWORD"
                  type="text"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => {
                    console.log(event.target.value);
                    setPassword(event.target.value);
                  }}
                />
              </label>
            </fieldset>
          </div>
          <button
            type="submit"
            class="noselect"
            style={{ marginTop: "5px", position: "relative", left: "85px" }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Register;
