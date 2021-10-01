import { Link } from 'react-router-dom'
import { toggle_button_base_menu_action } from '../../baseApp1/redux/actions/burgerBottonBaseMenuAction'
import { BurgerBottonApp } from '../burgerBotton/BurgerBottonApp'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGoogle} from '@fortawesome/free-brands-svg-icons'

import './headerPageMenuTitle.css'


export const HeaderPageMenuTitle = () => {

    return(
        // <h1>haber que pedo</h1>        
        // <div className="headerPageMenuTitle">

        // </div>
        <>
        <Link to="/" className="headerPageMenuTitle-logo"> 
            <FontAwesomeIcon icon={faGoogle} />
        </Link>
        <p className="headerPageMenuTitle-title">
            Personal
        </p>
        <BurgerBottonApp clases = "headerPageMenuTitle-bottonMenu" nameState={"burger_botton_base_menu"} action={toggle_button_base_menu_action}/>
        </>
    )
}