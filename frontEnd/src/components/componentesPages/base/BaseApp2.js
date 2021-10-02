// CSS
import './Normalize.css'
import '../base/baseGrid.css'

// Import librerias
import { BrowserRouter} from "react-router-dom"
import {  useSelector} from 'react-redux';
import { useEffect } from "react";

// Componentes
import { BaseHeaderRoutes } from "./baseHeaderRoutes";
import BaseRoutes from './BaseMenu/BaseRoutes';
import AppContainer from '../../appContainer/AppContainer';


export const BaseApp2 = ( ) =>{

    const principal_elements_class = useSelector((state)=>state.principal_elements_class)
    

    useEffect(()=>{
        console.log(principal_elements_class);
    })



    return(
        <BrowserRouter>
            {/* <AppContainer> */}
                <div className={`${principal_elements_class.classBody} body_base`} id="body" name="body">
                    <header className={ `${principal_elements_class.classHeader}`} name="header">
                        <BaseHeaderRoutes/>
                    </header>
                    <main className={ `${principal_elements_class.classMain}`} id="main" name="main">
                        <BaseRoutes />
                    </main>
                </div>
            {/* </AppContainer> */}
        </BrowserRouter>

    )
}