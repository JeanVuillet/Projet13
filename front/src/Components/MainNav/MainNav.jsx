import './MainNav.scss'
import { NavLink } from 'react-router-dom'
import logo from './../../assets/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'


export function MainNav(){

    return (
        <nav className="main-nav">
        <NavLink className="main-nav-logo" to="/signIn">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div>
          <NavLink className="main-nav-item" to="./signIn">
          <FontAwesomeIcon className='icon' icon={faUserCircle} />
            Sign In
          </NavLink>
        </div>
      </nav>
    )
}