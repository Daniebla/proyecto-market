import { IS_USER_LOGIN } from "../actions/userLoginAction"

// import { TOGGLE_BUTTON_PERSONAL_MENU } from "../actions/burgerBottonPersonalMenuAction"

const havePassword = () =>{
    if( "" === localStorage.getItem("jwt") || null === localStorage.getItem("jwt") || undefined === localStorage.getItem("jwt")){
        console.log(localStorage.getItem("jwt"));
        console.log(11111);
        return false
    }else{
        console.log(localStorage.getItem("jwt"));
        console.log(22222);
        return true
    }
}

const default_user_login = {
    login: havePassword()
}

const user_login = (state = default_user_login, action) =>{
    
    switch(action.type){
        case IS_USER_LOGIN:{
            console.log("user login");
            return{
                ...state,
                login: havePassword()
                
                // active: !state.active 
            }
        }

        default: {
            return state
        }
    }
}

export default user_login