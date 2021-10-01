import { TOGGLE_BUTTON_PERSONAL_MENU } from "../actions/burgerBottonPersonalMenuAction"



const default_burger_botton_personal_menu = {
    active: false
}

const burger_botton_personal_menu = (state = default_burger_botton_personal_menu, action) =>{
    switch(action.type){
        case TOGGLE_BUTTON_PERSONAL_MENU:{
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

export default burger_botton_personal_menu