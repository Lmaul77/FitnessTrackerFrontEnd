import React, {useState} from "react";
import { Route, Routes, Link } from "react-router-dom"
import {
    Header,
    Footer,
    Body,
    Register,
    Login

} from "./"

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <div> 
            <Header isLoggedIn={isLoggedIn} />
      {/* { isLoggedIn? <Userbar setIsLoggedIn={setIsLoggedIn} /> : null } */}
            <Routes>
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />}/>8
            <Route path="/register" element={<Register />}/>
            </Routes>
            <Body/>
           
            
            <Footer/>
        </div>
    )
}

export default App