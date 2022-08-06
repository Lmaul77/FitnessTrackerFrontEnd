import { Link } from 'react-router-dom';
const Profilebar = ({isLoggedIn}) => {
    return (
        <nav className="Profilebar">
            <h1>Navigation</h1>

            {isLoggedIn ? (
                
            <ul>
            <li className="has-subnav">
                    <a href="#">
                    <i class="fa-solid fa-table-columns "></i>
                        <span className="nav-text">
                        <Link to="/allRoutines">All routines</Link>
                        </span>
                    </a>
                    </li>
                    <li className="has-subnav">
                    <a href="#">
                    <i class="fa-solid fa-heart-pulse"></i>
                        <span className="nav-text">
                        <Link to="/activities"> Activities </Link>
                        </span>
                    </a>   
                </li>
        
                <li className="has-subnav">
                    <a href="#">
                    <i class="fa-solid fa-dumbbell"></i>
                        <span className="nav-text">
                        <Link to="/RoutineActivities">Routine Activities</Link>
                        </span>
                    </a>   
                </li>
                <li className="has-subnav">
                    <a href="#">
                    <i class="fa-solid fa-ranking-star"></i>
                        <span className="nav-text">
                        <Link to="/userRoutines">My Routines</Link>
                        </span>
                    </a>
                    </li>
                    <li className="has-subnav">
                    <a href="#">
                    <i class="fa-solid fa-person-walking"></i>
                        <span className="nav-text">
                        <Link to="/createActivities"> Create Activity </Link>
                        </span>
                    </a>   
                </li>
        
                <li className="has-subnav">
                    <a href="#">
                    <i class="fa-solid fa-list-check"></i>
                        <span className="nav-text">
                        <Link to="/createRoutine"> Create Routine </Link>
                        </span>
                    </a>   
                </li>
        
            </ul>
            ) : (
            
                <ul>
                <li className="has-subnav">
                    <a href="#">
                    <i class="fa-solid fa-table-columns"></i>
                        <span className="nav-text">
                        <Link to="/allRoutines">All routines</Link>
                        </span>
                    </a>
                    </li>
                    <li className="has-subnav">
                    <a href="#">
                    <i class="fa-solid fa-heart-pulse"></i>
                        <span className="nav-text">
                        <Link to="/activities"> Activities </Link>
                        </span>
                    </a>   
                </li>
        
                <li className="has-subnav">
                    <a href="#">
                    <i class="fa-solid fa-dumbbell"></i>
                        <span className="nav-text">
                        <Link to="/RoutineActivities">Routine Activities</Link>
                        </span>
                    </a>   
                </li>
            
            </ul>
            )
            }

           
        </nav>
    )
}

export default Profilebar