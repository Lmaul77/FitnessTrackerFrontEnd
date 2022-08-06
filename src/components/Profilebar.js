import { Link } from "react-router-dom";
const Profilebar = ({ isLoggedIn, setIsLoggedIn }) => {
    function logOut() {
        setIsLoggedIn(false);
        localStorage.clear("token");
      }
  return (
    <nav >
        <h1 className="Profilebar"></h1>
      {isLoggedIn ? (
        <ul>
          <div class="area"></div>
          <nav class="main-menu">
            <ul>
              <li>  
                
                <li class="has-subnav">
                <a href="#">
                <i class="fa-solid fa-house"></i>
                  <span class="nav-text">
                    <Link to="/userRoutines">My Routines</Link>
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                <i class="fa-solid fa-dumbbell"></i>
                  <span class="nav-text">
                    <Link to="/createActivities"> Create Activity </Link>
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                <i class="fa-solid fa-person-running"></i>
                  <span class="nav-text">
                    <Link to="/createRoutine"> Create Routine </Link>
                  </span>
                </a>
              </li>
                <a href="#">
                <i class="fa-solid fa-list-check"></i>
                <span class="nav-text">
                  <Link to="/allRoutines">All routines</Link>
                </span>
              </a>
            </li>
            <li class="has-subnav">
              <a href="#">
              <i class="fa-solid fa-heart-pulse"></i>
                <span class="nav-text">
                  <Link to="/activities"> Activities </Link>
                </span>
              </a>
            </li>
            <li class="has-subnav">
              <a href="#">
              <i class="fa-solid fa-bars-progress"></i>
              <span class="nav-text">
                  <Link to="/RoutineActivities">Routine Activities</Link>
                </span>
              </a>
            </li>
            
            </ul>

            <ul class="logout">
              <li>
  
                  <i class="fa fa-power-off fa-2x"></i>
                  <span class="nav-text">   <button onClick={logOut}>LOG OUT!</button></span>
    
              </li>
            </ul>
          </nav>
          <body></body>
        </ul>
      ) : (
        <ul>
          <div class="area"></div>
          <nav class="main-menu">
            <li>
              <a href="#">
              <i class="fa-solid fa-list-check"></i>
                <span class="nav-text">
                  <Link to="/allRoutines">All routines</Link>
                </span>
              </a>
            </li>
            <li class="has-subnav">
              <a href="#">
              <i class="fa-solid fa-heart-pulse"></i>
                <span class="nav-text">
                  <Link to="/activities"> Activities </Link>
                </span>
              </a>
            </li>
            <li class="has-subnav">
              <a href="#">
              <i class="fa-solid fa-bars-progress"></i>
              <span class="nav-text">
                  <Link to="/RoutineActivities">Routine Activities</Link>
                </span>
              </a>
            </li>

          </nav>
          <body></body>
        </ul>
      )}
    </nav>
  );
};

export default Profilebar;
