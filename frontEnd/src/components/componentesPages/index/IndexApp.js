// librerías
import {  useEffect } from 'react';
import { useSelector } from 'react-redux';

// Componentes
import { IndexAppLogged } from './IndexLogged';
import { IndexLogin } from './IndexLogin';

// helper


export const IndexApp = ()=>{

    const isUserLogin= useSelector((state)=>state.user_login)
    // console.log(1234,isUserLogin);


    useEffect(()=>{

    })

    return(
        <>
        {
            isUserLogin.login ? (<IndexAppLogged/>)  : (<IndexLogin/>)
        }
        </>


    )
}
