// Dans votre fichier Form.jsx

import './Form.scss';
import { NavLink } from 'react-router-dom';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../../../api'; // Importez la fonction de mutation depuis api.js
import { api } from '../../../api';
export function Form() {

  const [login, { isLoading, isError, error }] = useLoginMutation();
  const [loginMutation] = api.endpoints.login.useMutation();
  // Utilisez la fonction de mutation login directement depuis votre API Redux Toolkit


  async function testApi(username, password) {
    try {
      const user = { 'email': username, 'password': password };

      // Utilisez la fonction de mutation pour déclencher la mutation avec les données de l'utilisateur
      const response = await login(user);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  function buttonClick() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    testApi(username, password);
    // Vous pouvez également utiliser dispatch pour mettre à jour l'état global si nécessaire
    // dispatch(firstSlice.actions.setUser(username));
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
