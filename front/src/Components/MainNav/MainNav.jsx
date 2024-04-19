import './MainNav.scss'
import { NavLink } from 'react-router-dom'
import logo from './../../assets/argentBankLogo.png'
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
            <i class="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        </div>
      </nav>
    )
}