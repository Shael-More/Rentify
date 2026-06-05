import { Link, NavLink } from 'react-router-dom';
import UserIcon from "../assets/images/user_icon.png"
const Header = () => {
  function fakeLogout(){
    return localStorage.removeItem("isLoggedIn")
  }
  return (
    <header>
      <Link to={'/'} className='site-logo'>
        #RENTIFY
      </Link>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : null)}
          to={'/host'}
        >
          Host
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : null)}
          to={'/about'}
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : null)}
          to={'/vans'}
        >
          Vans
        </NavLink>
        <Link
          className="user-icon"
          to={'/login'}
        >
          <img src={UserIcon} alt='user icon' width={20}/>
        </Link>
        <button onClick={() => fakeLogout()}>X</button>
      </nav>
    </header>
  );
};

export default Header;
