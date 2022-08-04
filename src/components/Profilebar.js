import react from 'react';
import { Link } from 'react-router-dom';

const Profilebar = () => {
    return (
        <div className="Profilebar">
            <h1>NAVIGATION WORDS</h1>
            <Link to="/activities"> Activities </Link>
            <Link to="/createActivities"> Create Activity </Link>
            <div><Link to="/createRoutine"> Create Routine </Link></div>
            <Link to="/RoutineActivities">Routine Activities</Link>
            <Link to="/userRoutines">My Routines</Link>
            <Link to="/allRoutines">All routines</Link>
        </div>
    )
}

export default Profilebar