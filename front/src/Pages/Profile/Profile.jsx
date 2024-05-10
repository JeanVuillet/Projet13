import "./Profile.scss";
import { AccountComp } from "../../Components/AcccountComp/AccountComp";
import { useSelector } from "react-redux";
import {  storeGetUser } from "../../App/store";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Modale } from "./ChangeName/ChangeName.jsx";
import { useGetUserMutation } from './../../api.js';
import { useDispatch } from 'react-redux';
import { firstSlice } from "../../App/store";
export function User() {

  const dispatch = useDispatch();
  const localUser = useSelector(storeGetUser);
  const token = localStorage.getItem('token');
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const [getUser] = useGetUserMutation();
  useEffect(() => {
    if (!token) {
      navigate('/signIn');
    } else {
      getLocalUser(); // Appelle getLocalUser une seule fois au montage
    }
  }, []); // Retire isLoading de la liste des dépendances

  async function getLocalUser() {

      const user = await getUser(token);
      const userData = {
        firstName: user.data.body.firstName,
        lastName: user.data.body.lastName,
        token: token
      };

      dispatch(firstSlice.actions.setUser(userData));
      dispatch(firstSlice.actions.login(true));
      
   
  }

  function editName() {
    setModalOpen(true);
  }

  return (
    <>
      <main className="main bg-dark" style={modalOpen ? { backgroundColor: '#dfe7ec' } : {}}>
        <div className="header">
          
            <>
              {modalOpen ? (
                <Modale setModalOpen={setModalOpen} />
              ) : (
                <>
                  <h1>
                    Welcome back
                    <br />
                    {localUser ? localUser.firstName + ' ' + localUser.lastName : 'loading'}
                  </h1>
                  <button className="edit-button" onClick={editName}>
                    Edit Name
                  </button>
                </>
              )}
            </>
        
        </div>
        <div className="accoutsSection">
          <h2 className="sr-only">Accounts</h2>
          <div className="accounts">
            <AccountComp header='Argent Bank Checking (x8349)' amount='$2,082.79' footer='Available Balance' />
            <AccountComp header='Argent Bank Savings (x6712)' amount='$10,928.42' footer='Available Balance' />
            <AccountComp header='Argent Bank Credit Card (x8349)' amount='$184.30' footer='Current Balance' />
          </div>
        </div>
      </main>
    </>
  );
}
