import { useEffect, useState } from 'react'
import './Error.scss'
import { useLocation } from 'react-router-dom'

export function Error(){
    const location=useLocation();
    const params= new URLSearchParams(location.search);
    const Error=params.get('errorCode');
 console.log(Error);


    return(
        <>
        <div className="error">
        {Error==='400'? '400':'500'}
        </div>
        <div className="errorMessage">{Error==='400'?'wrong password or Id':'No connexion to dataBase'}</div>
        </>
    )
}