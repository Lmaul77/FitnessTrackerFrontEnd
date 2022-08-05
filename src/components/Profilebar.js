import { Link } from 'react-router-dom';

const Profilebar = ({isLoggedIn}) => {
    return (
        <div className="Profilebar">
            <h1>NAVIGATION WORDS</h1>

            {isLoggedIn ? (
            <div>
            <div><Link to="/userRoutines">My Routines</Link></div>
            <div><Link to="/allRoutines">All routines</Link></div>
            <div><Link to="/activities"> Activities </Link></div>
            <div><Link to="/RoutineActivities">Routine Activities</Link></div>
            <div><Link to="/createRoutine"> Create Routine </Link></div>
            <div><Link to="/createActivities"> Create Activity </Link></div>
            </div>
            ) : (
            <div>
            <div><Link to="/allRoutines">All routines</Link></div>
            <div><Link to="/activities"> Activities </Link></div>
            <div><Link to="/RoutineActivities">Routine Activities</Link></div>
            </div>
            )
            }

           
        </div>
    )
}

export default Profilebar