import { TOGGLE_BUTTON_BASE_MENU } from "../actions/burgerBottonBaseMenuAction";

const default_burger_botton_base_menu = {
    active: false
}

const burger_botton_base_menu = (state = default_burger_botton_base_menu, action) =>{
    switch(action.type){
        case TOGGLE_BUTTON_BASE_MENU:{
            return{
                ...state,
                active: !state.active 
            }
        }

        default: {
            return state
        }
    }
}

export default burger_botton_base_menu