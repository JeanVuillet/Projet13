import "./Profile.scss";
import { AccountComp } from "../../Components/AcccountComp/AccountComp";
import { useSelector } from "react-redux";
import {  getUser } from "../../App/store";
import { useState } from "react";
import { useChangeNameMutation, } from "../../api";
import { useGetUserMutation } from "../../api";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChangeName } from "./ChangeName/ChangeName.jsx"
 
export function User() {
  const user = useSelector(getUser);
  const [nameDiv, setNameDiv] = useState(false);
 const navigate=useNavigate();
  useEffect(()=>{
    const token=localStorage.getItem('token');

    if(!token){
  navigate('/signIn');
    }
  },[]);


  function editName() {
    setNameDiv(true);
  }



  return (
    <>
      <main className="main bg-dark"style={nameDiv?{backgroundColor:'#dfe7ec'}: {}}>
        <div className="header">
          {nameDiv ? <ChangeName setNameDiv={setNameDiv}/> 
          :
          (<><h1>
            Welcome back
            <br />
            {user.firstName+' '+user.lastName}
          </h1>
          <button className="edit-button" onClick={editName}>
            Edit Name
          </button></>
        )
        }

        </div>
        <div className="accoutsSection">
          <h2 className="sr-only">Accounts</h2>
          <div className="accounts">
            <AccountComp header='Argent Bank Checking (x8349)' amount='$2,082.79' footer='Available Balance'/>
            <AccountComp header='Argent Bank Savings (x6712)' amount='$10,928.42' footer='Available Balance'/>
            <AccountComp header='Argent Bank Credit Card (x8349)' amount='$184.30' footer='Current Balance'/>
          </div>
        </div>

      </main>
    </>
  );

}
