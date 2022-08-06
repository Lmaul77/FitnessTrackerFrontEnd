import React from "react";
import { Link } from "react-router-dom";

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  function logOut() {
    setIsLoggedIn(false);
    localStorage.clear("token");
  }

  return (
    <header id="HomeHeader">
      <h1>Fitness Tracker</h1>
      <form>
        {!isLoggedIn ? (
          <>
            <div>
              <button><Link to="/login" style={{textDecoration: "none", color: "white"}}> LOGIN </Link></button>
            </div>
            <br/>
            <div>
              <button><Link to="/Register" style={{textDecoration: "none", color: "white"}}> REGISTER</Link></button>
            </div>
          </>
        ) : (
          <>
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
