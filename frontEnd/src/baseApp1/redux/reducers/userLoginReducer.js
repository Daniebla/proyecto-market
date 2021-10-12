import { IS_USER_LOGIN } from "../actions/userLoginAction"

// import { TOGGLE_BUTTON_PERSONAL_MENU } from "../actions/burgerBottonPersonalMenuAction"

const havePassword = () =>{
    if( "" === localStorage.getItem("jwt") || null === localStorage.getItem("jwt") || undefined === localStorage.getItem("jwt")){
        console.log("No se detecto algun contenido en key jwt de usuario");
        return false
    }else{
        console.log("Se detecto algun contenido en key jwt de usuario");
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
            }
        }

        default: return state
       
    }
}

export default user_login