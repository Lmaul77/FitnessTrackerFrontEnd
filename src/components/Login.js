import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api";

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = await loginUser (username, password);
    localStorage.setItem("token", token);
    setIsLoggedIn(true)
    setUsername("");
    setPassword("");
    navigate("/userRoutines")
  };

  return (
  <div id="LoginBoxCenter">
    <div id="LoginBox">
      <div>
        <h1 id="LoginHeader">Log In To Your Fitness Tracker Account!</h1>
      </div>
    <form onSubmit={handleSubmit}>
      <div>
        <fieldset>
          <label>
            <input
              id="HUsername"
              name="username"
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
              id="HPassword"
              name="password"
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
      <button type="submit" class="noselect" style={{marginTop: "5px", position: "relative", left: "85px"}}>Login</button>
    </form>
    </div>
    </div>
  );
};

export default Login;