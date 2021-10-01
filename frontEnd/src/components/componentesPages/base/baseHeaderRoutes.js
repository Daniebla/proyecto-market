// Librerías
import { Switch,Route } from "react-router"

// Components
import { HeaderPageMenuTitle } from "../../headerPageMenuTitle/HeaderPageMenuTitle"
import BaseMenu from "./BaseMenu/BaseMenu"
import { MenuPrincipal } from '../../menu/MenuPrincipal';

// import configuracion
import baseMenuConfig from '../../../config/baseMenuConfig.json'

// Redux actions
import { toggle_button_base_menu_action } from '../../../baseApp1/redux/actions/burgerBottonBaseMenuAction'

export const BaseHeaderRoutes = ()=>{

    return(        
            <Switch>
                <Route exact path="/"  >
                    <MenuPrincipal nameState={"burger_botton_base_menu"} lista={baseMenuConfig.lista} action={toggle_button_base_menu_action}/>
                    <BaseMenu/>
                </Route>
                
                <Route path="/personal">
                    <MenuPrincipal nameState={"burger_botton_base_menu"} lista={baseMenuConfig.lista} action={toggle_button_base_menu_action}/>
                    <HeaderPageMenuTitle/>
                </Route> 
            </Switch>
    )
}