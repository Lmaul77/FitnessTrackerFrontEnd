import React, {useState , useEffect} from "react";
import { Routines } from "./";
import { Route, Routes, Link } from "react-router-dom"


const Body = ({routines,setRoutines}) => {
    return (
        <div>
            <div>
                <form>
                
                    <button>
                        Create
                    </button>
                    <button>
                        Delete
                    </button>
                </form>
                
                <Routines routines={routines} setRoutines={setRoutines}/>
                   
                <form>
                    <div>
                        Activities
                    </div>
                    <button>
                        Create
                    </button>
                    <button>
                        Delete
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Body