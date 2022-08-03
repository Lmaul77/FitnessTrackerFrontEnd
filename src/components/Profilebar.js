import react from 'react';
import { Link } from 'react-router-dom';

const Profilebar = () => {
    return (
        <div className="Profilebar">
            <h1>NAVIGATION WORDS</h1>
            <Link to="/activities"> Activities </Link>
            <Link to="/createActivities"> Create Activity </Link>
            <div>create routine</div>
            <Link to="/routineActivities">add activities to a routine</Link>
            <Link to="/userRoutines">My Routines</Link>
        </div>
    )
}

export default Profilebar