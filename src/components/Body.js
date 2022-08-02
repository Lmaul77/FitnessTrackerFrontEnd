import React from "react";
import Activities from "./Activities";
import { Route, Routes } from "react-router-dom"

const Body = ({
    activities,
    setActivities
}) => {
    return (
        <div>
            <div>
                <form>
                    <div>
                        Routines
                    </div>
                    <button>
                        Create
                    </button>
                    <button>
                        Delete
                    </button>
                </form>
                <div>
                <Activities activities={activities} setActivities={setActivities} />
                </div>
                <form>
                    <div>
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