// // Import CSS
// import '../base/baseGrid.css'

// Librerías
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'

// ta raro esto
import {  } from './menuPersonal/PersonalMenu';
// ta raro esto

// Componenentes
import { SubMenuApp } from '../../subMenu/SubMenuApp';

// Personal Routes
import { PersonalRoutes} from './PersonalRoutes';

// Redux actions
import { change_class_element_body_action, change_class_element_main_action, change_class_element_header_action } from '../../../baseApp1/redux/actions/bodyClassElementAction'

// Config
import personalSubMenuConfig from '../../../config/personalSubmenuConfig.json'

export const Personal = ()=>{
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(change_class_element_body_action('body'))
        dispatch(change_class_element_header_action('header'))
        dispatch(change_class_element_main_action('main'))
        
    },[])

    return(
        <>
            <SubMenuApp lista={personalSubMenuConfig.lista} />
            <PersonalRoutes />
        </>
    )
}