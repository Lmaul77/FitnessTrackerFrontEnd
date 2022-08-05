import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api";

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("SUBMITTING LOGIN");
    const token = await loginUser (username, password);
    console.log(token);
    localStorage.setItem("token", token);
    setIsLoggedIn(true)
    setUsername("");
    setPassword("");
    navigate("/userRoutines")
  };

  return (
  
    <form id="logIn" onSubmit={handleSubmit}>
      <div>
        <fieldset>
          <label>
            User Name:   
            <input
              name="username"
              type="text"
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
            Password: 
            <input
              name="password"
              type="text"
              value={password}
              onChange={(event) => {
                console.log(event.target.value);
                setPassword(event.target.value);
              }}
            />
          </label>
        </fieldset>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;