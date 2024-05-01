import "./Profile.scss";
import { AccountComp } from "../../Components/AcccountComp/AccountComp";
import { useSelector } from "react-redux";
import {  getUser } from "../../App/store";
import { useState } from "react";
import { useChangeNameMutation, } from "../../api";
import { useGetUserMutation } from "../../api";
import { firstSlice } from "../../App/store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
 
export function User() {
  const dispatch=useDispatch()
  const user = useSelector(getUser);
  const [nameDiv, setNameDiv] = useState(false);
  const changeNameMutation = useChangeNameMutation();
  const [changeName] = changeNameMutation;
  const getNameMutation=useGetUserMutation();
  const[getName]=getNameMutation;


  function editName() {
    setNameDiv(true);
  }
async function nameChanger(event){
  event.preventDefault();
   let userFirstName=document.getElementById('prenom');
   let userLastName=document.getElementById('nom');
const response = await changeName({token:user.token, firstName:userFirstName.value,lastName:userLastName.value});
console.log(response)

const newName=await getName(user.token);
dispatch(firstSlice.actions.setUser({firstName:newName.data.body.firstName,lastName:newName.data.body.lastName,token:user.token}))
setNameDiv(false);

console.log('userIs');
console.log(user)
}

  return (
    <>
      <main className="main bg-dark"style={nameDiv?{backgroundColor:'#dfe7ec'}: {}}>
        <div className="header">
          {nameDiv ? (<>
          <h1 className="welcomModal">    Welcome back</h1>
         <form onSubmit={(event)=>nameChanger(event)}>
          <div className="inputs">
          <input id='prenom' placeholder={user.firstName} required>
            </input>
            <input id='nom' placeholder={user.lastName} required>
            </input>
          </div>
          <div className="buttons">
            <button type="submit" >Save</button>
            <button onClick={()=>{setNameDiv(false)}}>Cancel</button>
          </div>
        </form >
          </>) :
          (<><h1>
            Welcome back
            <br />
            {user.firstName+' '+user.lastName}
          </h1>
          <button className="edit-button" onClick={editName}>
            Edit Name
          </button></>)}

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
