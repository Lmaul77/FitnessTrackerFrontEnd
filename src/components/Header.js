import React from "react";
import { Link } from "react-router-dom";

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  function logOut() {
    setIsLoggedIn(false);
    localStorage.clear("token");
  }

  return (
    <header>
	<div class="overlay">
<h1>Fitness Tracker</h1>
<h3>Welcome to YOUR Fitness Journey</h3>
<p>This web app was specifically designed for you to colloborate routine and activity ideas with other like minded fitness enthusiasts.</p>
	<br/>
	<button class="loginbutton">Login</button>
    <br/>
    <button class="registerbutton">Register</button>
		</div>
</header>
);
};



    {/* // <header class="HeaderHeader">
    //     <div class="HeaderCSS">
    //   <h1 class="HeaderH1">Fitness Tracker</h1>
    //   <h2 class="HeaderH2">Welcome to YOUR Fitness Journey</h2>
    //   <form>
    //     {!isLoggedIn ? ( */}


    {/* //       <>
    //         <div class="HeaderButton">
    //           <Link to="/login"> LOGIN </Link>
    //         </div>
    //         <div class="HeaderButton">
    //           <Link to="/Register"> REGISTER</Link>
    //         </div>
    //       </>
    //     ) : (
    //       <>
    //         <div class="HeaderButton">
    //           <button onClick={logOut}>LOG OUT!</button>
    //         </div>
    //       </>
    //     )}
    //   </form> */}
    {/* //   </div> */}
    {/* // </header> */}

export default Header;
