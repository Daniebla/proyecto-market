import { CHANGE_CLASS_ELEMENT_MAIN, CHANGE_CLASS_ELEMENT_BODY, CHANGE_CLASS_ELEMENT_HEADER } from "../actions/bodyClassElementAction";

const default_principal_elements_class = {
    classBody: "",
    classMain: "",
    classHeader: ""
}

const principal_elements_class = (state = default_principal_elements_class, action) =>{
    
    switch(action.type){

        case CHANGE_CLASS_ELEMENT_BODY:{
            return{
                ...state,
                classBody: action.payload
            }
        }

        case CHANGE_CLASS_ELEMENT_HEADER:{
            return{
                ...state,
                classHeader: action.payload
            }
        }

        case CHANGE_CLASS_ELEMENT_MAIN:{
            return{
                ...state,
                classMain: action.payload
            }
        }

        




        default: return state
        
    }
}

export default principal_elements_class