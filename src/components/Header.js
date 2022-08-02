import React from "react";
import { Link } from "react-router-dom";

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
    function logOut () {
        setIsLoggedIn(false);
        localStorage.clear("token")
    }

    return (
        <header id="HomeHeader">
            <h1>
            Fitness Tracker
            </h1>
                <h2>
                    Welcome to YOUR Fitness Journey
                </h2>
                    <form>
                        {!isLoggedIn ? (
                            <>
                            <div>
                            <Link to="/login"> LOGIN </Link>
                            </div>
                            <div>
                            <Link to="/Register"> REGISTER</Link>
                            </div>
                            </> ) : (
                            <>
                            <div>
                            <button onClick={logOut}>LOG OUT!</button>
                            </div>
                            </> )
                        }
                    </form>
        </header>
    )
}

export default Header