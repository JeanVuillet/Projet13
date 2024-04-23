import './Form.scss';
import { NavLink } from 'react-router-dom';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { firstSlice } from '../../../App/store';
import { useDispatch } from 'react-redux';

export function Form() {
  const dispatch = useDispatch();


  function buttonClick() {
    const username = document.getElementById('username').value;
    dispatch(firstSlice.actions.setUser(username)); // Dispatchez l'action setUser avec le nom d'utilisateur saisi

  }

  return (
    <>
      <form>
        <FontAwesomeIcon className='icon' icon={faUserCircle} />
        <h1>Sign In</h1>
       
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <NavLink to="/user" className="sign-in-button" onClick={buttonClick}>
          Sign In
        </NavLink>
      </form>
    </>
  );
}
