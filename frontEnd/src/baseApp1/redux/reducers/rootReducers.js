import { combineReducers } from "redux";
import burger_botton_base_menu from "./burgerBottonBaseMenuReducer";
import burger_botton_personal_menu from "./burgerBottonPersonalMenuReducer";
import principal_elements_class from "./bodyClassElementReducer";
import user_login from "./userLoginReducer";


const rootReducers = combineReducers({
    burger_botton_personal_menu,
    burger_botton_base_menu,
    user_login,
    principal_elements_class
})

export default rootReducers