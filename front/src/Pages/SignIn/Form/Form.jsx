// Dans votre fichier Form.jsx

import './Form.scss';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../../../api'; // Importez la fonction de mutation depuis api.js
import { useGetUserMutation } from '../../../api';
import { firstSlice } from '../../../App/store';
import { useState } from 'react';



export function Form() {
    const navigate=useNavigate();
    const dispatch=useDispatch();
  // Utilisez la fonction de mutation login directement depuis votre API Redux Toolkit
  const [login , {isLoading,error,isError}] = useLoginMutation();
  const [getUser,{loading2,error2,isError2}] = useGetUserMutation();
  const [errorMessage,setErrorMessage]=useState(null)
  let response=null;

  async function storeUser(userMail, password) {
   
      const user = { 'email': userMail, 'password': password };

      // envoie de l utilisateur pour tenter le login dans la bdd
        response = await login(user);
  

      if (response.data){
        //si reponse positive
      if(response.data.message==='User successfully logged in')
      {      
        //recuperation du token dans la reponse
        setErrorMessage(null);
        const token=response.data.body.token;
        // recuperation de l utilisateur dans la bdd via le token
        const user=await getUser(token);
       const userData={firstName:user.data.body.firstName,
                    lastName:user.data.body.lastName,
                    token:token
                  };
  
        // stockage de l utilisateur dans le store
      dispatch(firstSlice.actions.setUser(userData));
      dispatch(firstSlice.actions.login(true))
      localStorage.setItem('token', token); // Stockage du JWT dans le stockage local
      navigate('/user')
       }
      }
      //si reponse negative
      else {
        if(response.error.status===400){
        setErrorMessage('wrong password or Id')}
        //si erreur de connexion
      else{
        navigate('/error?errorCode=500')
      }

    }
  }

  function buttonClick() {
    try{
    const userMail = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    storeUser(userMail, password);


    }
    catch(error){
      throw new Error('error')
    }


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
