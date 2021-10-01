import './baseMenu.css'
import { Link } from "react-router-dom";
// icono
import {faSearch, faHistory, faHeart, faUser, faBell }  from "@fortawesome/free-solid-svg-icons";
import {faGoogle} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import componentes
import { MenuPrincipal } from '../../../menu/MenuPrincipal';


// import configuracion
import baseMenuConfig from '../../../../config/baseMenuConfig.json'

// use 
import React, { useEffect, useRef } from 'react';
import { BurgerBottonApp } from '../../../burgerBotton/BurgerBottonApp';
import { toggle_button_base_menu_action } from '../../../../baseApp1/redux/actions/burgerBottonBaseMenuAction';


const BaseMenu = ()=>{
    
    // referencia
    // const refBottonMenu = useRef()
    // const refMenuPrincipal = useRef()

    useEffect(()=>{
        
    },[])

    

    return(
    <>
        <Link to="/" className="topbar__logo"> 
            <FontAwesomeIcon icon={faGoogle} />
         </Link>
        <div className="topbar">
            <form className="buscador-box">
                <div className="buscador-box_input">
                    {/* <div  className="topbar__iconCollection__link">  */}
                        <input type="text" name="name" placeholder="name" className="buscador-box_input_form" id="form__buscador_input"></input>  
                    {/* </div> */}
                </div>
                <div className="buscador-box_icono">
                    <input type="submit"  className="buscador-box_icono_form" id="form__icono_submit"/>
                    <FontAwesomeIcon icon={faSearch} className="buscador-box_icono_img"/>                       
                </div>
            </form>
            <div className="topbar__iconCollection">
                <div className="topbar__iconCollection__icon">
                    <FontAwesomeIcon icon={faHistory} />
                </div>
                <Link to="/subir" className="topbar__iconCollection__link">
                    <div className="topbar__iconCollection__icon">
                    <FontAwesomeIcon icon={faHeart} />
                    </div>
                </Link>
                <div className="topbar__iconCollection__icon">
                    <FontAwesomeIcon icon={faBell} />
                </div>
                <BurgerBottonApp nameState={"burger_botton_base_menu"} action={toggle_button_base_menu_action} clases={"topbar__iconCollection__link"}/>
            </div>
        </div>

    </>
    )
}

export default BaseMenu