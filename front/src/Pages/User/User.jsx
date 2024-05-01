import "./User.scss";
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
async function nameChanger(){
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
          <div className="inputs">
          <input id='prenom' placeholder={user.firstName}>
            </input>
            <input id='nom' placeholder={user.lastName}>
            </input>
          </div>
          <div className="buttons">
            <button onClick={nameChanger}>Save</button>
            <button onClick={()=>{setNameDiv(false)}}>Cancel</button>
          </div>
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
            <AccountComp />
          </div>
        </div>

      </main>
    </>
  );

}
