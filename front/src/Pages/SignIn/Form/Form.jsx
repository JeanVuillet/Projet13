// Dans votre fichier Form.jsx

import './Form.scss';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../../../api'; // Importez la fonction de mutation depuis api.js
import { useGetUserMutation } from '../../../api';
import { firstSlice } from '../../../App/store';
import { jwtDecode } from 'jwt-decode';
import { useState } from 'react';



export function Form() {
    const navigate=useNavigate();
    const dispatch=useDispatch();
  // Utilisez la fonction de mutation login directement depuis votre API Redux Toolkit
  const [login , {isLoading,error,isError}] = useLoginMutation();
  const [getUser,{loading2,error2,isError2}] = useGetUserMutation();
  const [errorMessage,setErrorMessage]=useState(null)
  let response=null;

  async function testApi(userMail, password) {
   
      const user = { 'email': userMail, 'password': password };

      // Utilisez la fonction de mutation pour déclencher la mutation avec les données de l'utilisateur
        response = await login(user);
  

      if (response.data){
      if(response.data.message==='User successfully logged in')
      {      
        setErrorMessage(null);
        const token=response.data.body.token;

        const user=await getUser(token);
       const userData={firstName:user.data.body.firstName,
                    lastName:user.data.body.lastName
                  };
  
             
      dispatch(firstSlice.actions.setUser(userData));
      dispatch(firstSlice.actions.login(true))
      navigate('/user')
       }
      }
      else {
        if(response.error.status===400){
        setErrorMessage('wrong password or Id')}
      else{
        navigate('/error?errorCode=500')
      }

    }
  }

  function buttonClick() {
    try{
    const userMail = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    testApi(userMail, password);


    }
    catch(error){
      throw new Error('error')
    }

    // Vous pouvez également utiliser dispatch pour mettre à jour l'état global si nécessaire
    // dispatch(firstSlice.actions.setUser(username));
  }
 function supressError(){
  setErrorMessage(null);
 }
  return (
    <>
      <form>
        <FontAwesomeIcon className='icon' icon={faUserCircle} />
        <h1>Sign In</h1>
       
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" onChange={supressError}/>
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={supressError}/>
        </div>
        <div className="errorDiv">{errorMessage}</div>
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
