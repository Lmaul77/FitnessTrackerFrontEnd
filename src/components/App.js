import React from "react";
import { Route, Routes } from "react-router-dom"
import {
    Header,
    Footer,
    Body
} from "./"

const App = () => {
    return (
        <div>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}

export default App