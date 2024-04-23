// Dans votre fichier Form.jsx

import './Form.scss';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../../../api'; // Importez la fonction de mutation depuis api.js
import { firstSlice } from '../../../App/store';
export function Form() {
    const navigate=useNavigate();
    const dispatch=useDispatch();
  // Utilisez la fonction de mutation login directement depuis votre API Redux Toolkit
  const [login , {isLoading,error,isError}] = useLoginMutation();
  const test=useLoginMutation();
  console.log('test'+test)

  async function testApi(username, password) {
    
      const user = { 'email': username, 'password': password };

      // Utilisez la fonction de mutation pour déclencher la mutation avec les données de l'utilisateur
      const response = await login(user);
      console.log('async resp')
      // console.log(response)
      if (response.data){
      if(response.data.message==='User successfully logged in')
      {       console.log('welcom '+username);
             
      dispatch(firstSlice.actions.setUser(username));
      navigate('/user')
       }
      }
      else {
        if(response.error.status===400){
        navigate('/error?errorCode=400')}
      else{
        navigate('/error?errorCode=500')
      }

    }
  }

  function buttonClick() {
    try{
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    testApi(username, password);


    }
    catch(error){
      throw new Error('error')
    }

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
        <div to="/user" className="sign-in-button" onClick={buttonClick}>
          Sign In
        </div>
      </form>
    </>
  );
}
