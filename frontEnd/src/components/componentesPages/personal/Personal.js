// Import CSS
import './personal.css'

// Librerías
import { useEffect, 
    // useState
} from 'react';
import { useDispatch } from 'react-redux'

// ta raro esto
import {  } from './menuPersonal/PersonalMenu';
// ta raro esto

// Componenentes
import { PersonalRoutes} from './PersonalRoutes';
import { StaticMenuPersonalApp } from './staticMenuPersonal/StaticMenuPersonalApp';

// Redux actions
import { change_class_element_body_action, change_class_element_main_action, change_class_element_header_action } from '../../../baseApp1/redux/actions/bodyClassElementAction'

// Config
// import config from'../../../config/personalStaticMenuConfig.json'

export const Personal = ()=>{
    
    const dispatch = useDispatch()
    // const [activeMenu, setActiveMenu] = useState(false)
    useEffect(()=>{
        dispatch(change_class_element_body_action('body_TitleMenu'))
        dispatch(change_class_element_header_action('header_TitleMenu'))
        dispatch(change_class_element_main_action('main_TitleMenu'))
    },[])


    
    return(
        <>
            {/* {activeMenu && <StaticMenuPersonalApp config={config.lista} />} */}
            <PersonalRoutes 
            // setActiveMenu={setActiveMenu}
            />
        </>
    
    )
}