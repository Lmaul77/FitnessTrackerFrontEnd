import { Link } from 'react-router-dom';

const Profilebar = ({isLoggedIn}) => {
    return (
        <div className="Profilebar">
            <h1>NAVIGATION WORDS</h1>

            {isLoggedIn ? (
                
            <div>
            <ul>
            <li><Link to="/userRoutines">My Routines</Link></li>
            <li><Link to="/allRoutines">All routines</Link></li>
            <li><i class="fa-light fa-dumbbell"></i><Link to="/activities"> Activities </Link></li>
            <li><Link to="/RoutineActivities">Routine Activities</Link></li>
            <li><Link to="/createRoutine"> Create Routine </Link></li>
            <li><Link to="/createActivities"> Create Activity </Link></li>
            <li>
                    <a href="http://justinfarrow.com">
                        <i class="fa fa-home fa-2x"></i>
                        <span class="nav-text">
                            Dashboard
                        </span>
                    </a>
                  
                </li>
            </ul>
            </div>
            ) : (
            <div>
                <ul>
            <li><Link to="/allRoutines">All routines</Link></li>
            <li><Link to="/activities"> Activities </Link></li>
            <li><Link to="/RoutineActivities">Routine Activities</Link></li>
            <li>
                    <a href="localhost:3000/">
                        <i class="fa fa-home fa-2x"></i>
                        <span class="nav-text">
                            Dashboard
                        </span>
                    </a>
                  
                </li>
            </ul></div>
            )
            }

           
        </div>
    )
}

export default Profilebar