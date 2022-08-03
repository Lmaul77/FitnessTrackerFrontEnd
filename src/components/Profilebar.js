import react from 'react';
import { Link } from 'react-router-dom';

const Profilebar = () => {
    return (
        <div className="Profilebar">
            <h1>NAVIGATION WORDS</h1>
            <div><Link to="/Profile"> Your Profile </Link></div>
            <div><Link to="/createActivities"> Create Activity </Link></div>
            <div>create routine</div>
            <div>add activities to a routine</div>
        </div>
    )
}

export default Profilebar