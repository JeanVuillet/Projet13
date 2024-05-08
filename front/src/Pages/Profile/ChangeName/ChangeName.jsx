import {  getUser } from "../../../App/store";
import { useSelector } from "react-redux";
import { firstSlice } from "../../../App/store";
import { useDispatch } from "react-redux";
import { useChangeNameMutation, } from "../../../api";
import { useGetUserMutation } from "../../../api";
import './ChangeName.scss';

export function Modale({setNameDiv}){
    const changeNameMutation = useChangeNameMutation();
    const [changeName] = changeNameMutation;
    const getNameMutation=useGetUserMutation();
    const[getName]=getNameMutation;
  
    const user = useSelector(getUser);
    const dispatch=useDispatch();

    async function nameChanger(event){
        event.preventDefault();
         let userFirstName=document.getElementById('prenom');
         let userLastName=document.getElementById('nom');
     changeName({token:user.token, firstName:userFirstName.value,lastName:userLastName.value});
     
      
      const newName=await getName(user.token);
      dispatch(firstSlice.actions.setUser({firstName:newName.data.body.firstName,lastName:newName.data.body.lastName,token:user.token}))
      setNameDiv(false);
      
      }

    return(
        <>
      
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
          </>
    )
}