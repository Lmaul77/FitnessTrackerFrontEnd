import React from "react";

const Header = ({loggedIn}) => {
    return (
        <header id="HomeHeader">
            <h1>
            Fitness Tracker
            </h1>
                <h2>
                    Welcome to YOUR Fitness Journey
                </h2>
                    <form>
                        {!loggedIn ? (
                            <>
                            <div>
                                Login
                            </div>
                            <div>
                                Register
                            </div>
                            </> ) : (
                            <>
                            <div>
                                Logout
                            </div>
                            </> )
                        }
                    </form>
        </header>
    )
}

export default Header