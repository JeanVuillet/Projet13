import {  getUser } from "../../../App/store";
import { useSelector } from "react-redux";
import { firstSlice } from "../../../App/store";
import { useDispatch } from "react-redux";
import { useChangeNameMutation, } from "../../../api";
import { useGetUserMutation } from "../../../api";
import { useRef } from "react";
import './ChangeName.scss';

export function Modale({setModalOpen}){
    const changeNameMutation = useChangeNameMutation();
    const [changeName] = changeNameMutation;
    const getNameMutation=useGetUserMutation();
    const[getName]=getNameMutation;
  const prenomRef=useRef(null);
  const nomRef=useRef(null);
    const user = useSelector(getUser);
    const dispatch=useDispatch();

    // changement du nom dans la bdd verification et changement nom store
    async function nameChanger(event){
        event.preventDefault();
        // recupereation et changement dans la bdd
         let userFirstName=prenomRef.current.value;
         let userLastName=nomRef.current.value;
    await changeName({token:user.token, firstName:userFirstName,lastName:userLastName});
   
      // recuperation du nom  change depuis la bdd
      const newName=await getName(user.token);
      //mise a jour du nom dans le store
      dispatch(firstSlice.actions.setUser({firstName:newName.data.body.firstName,lastName:newName.data.body.lastName,token:user.token}))
      setModalOpen(false);
      
      }

    return(
        <>
      
          <h1 className="welcomModal">    Welcome back</h1>
         <form onSubmit={(event)=>nameChanger(event)}>
          <div className="inputs">
          <input id='prenom' placeholder={user.firstName} ref={prenomRef}required>
            </input>
            <input id='nom' placeholder={user.lastName} ref={nomRef}required>
            </input>
          </div>
          <div className="buttons">
            <button type="submit" >Save</button>
            <button onClick={()=>{setModalOpen(false)}}>Cancel</button>
          </div>
         </form >
          </>
    )
}