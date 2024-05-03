import './MainNav.scss'
import { NavLink } from 'react-router-dom'
import logo from './../../assets/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import {faRightFromBracket} from'@fortawesome/free-solid-svg-icons'
import { getLogin } from '../../App/store.js'
import { getUser } from '../../App/store.js'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { firstSlice } from '../../App/store.js'
export function MainNav({status}){

  const dispatch=useDispatch();
     const login=useSelector(getLogin);
    const user =useSelector(getUser);

function changeLogin(){
  if (login){
dispatch(firstSlice.actions.login(false))
dispatch(firstSlice.actions.setUser({firstName:'',lastName:'',token:''}))
localStorage.removeItem('token');
  }
}
    return (
        <nav className="main-nav">
        <NavLink className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div>
          { login? 
            <>
          <NavLink className="main-nav-item" >
          <FontAwesomeIcon className='icon' icon={faUserCircle} />
            {login && user? <span className='userFirstName'>{user.firstName}</span>:<></>}
          </NavLink>
          <NavLink className="main-nav-item" onClick={changeLogin} to={login? './':'./signIn'}>
         <FontAwesomeIcon icon={faRightFromBracket} /> Sign Out
          </NavLink></>
          :
          <NavLink className="main-nav-item"  to="/signIn">     <FontAwesomeIcon className='icon' icon={faUserCircle} /> Sign In</NavLink>}
        </div>
      </nav>
    )
}