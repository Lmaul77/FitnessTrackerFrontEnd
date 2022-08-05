import React from "react";
import { Link } from "react-router-dom";

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  function logOut() {
    setIsLoggedIn(false);
    localStorage.clear("token");
  }

  return (
    <header id="HomeHeader">
      <h1>LM:GT</h1>
      <h2 id="Hmessage">Welcome to YOUR Fitness Journey</h2>
      <form>
        {!isLoggedIn ? (
          <>
            <div>
              <Link to="/login"> LOGIN </Link>
            </div>
            <div>
              <Link to="/Register"> REGISTER</Link>
            </div>
          </>
        ) : (
          <>
            <div>
              <Link to="/Userroutines"> My Routines </Link>
            </div>
            <div>
              <button onClick={logOut}>LOG OUT!</button>
            </div>
          </>
        )}
      </form>
    </header>
  );
};

export default Header;
