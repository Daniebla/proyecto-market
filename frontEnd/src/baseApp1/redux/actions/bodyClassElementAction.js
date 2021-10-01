// NAMES
export const CHANGE_CLASS_ELEMENT_BODY = 'CHANGE_CLASS_ELEMENT_BODY'
export const CHANGE_CLASS_ELEMENT_HEADER = 'CHANGE_CLASS_ELEMENT_HEADER'
export const CHANGE_CLASS_ELEMENT_MAIN = 'CHANGE_CLASS_ELEMENT_MAIN'


// ACTIONS
export const change_class_element_body_action = (Class) =>{ 
    return{
        type: CHANGE_CLASS_ELEMENT_BODY,
        payload: Class
        
    }
}

export const change_class_element_header_action = (Class) =>{
    return{
        type: CHANGE_CLASS_ELEMENT_HEADER,
        payload: Class
        
    }
}

export const change_class_element_main_action = (Class) =>{ 
    return{
        type: CHANGE_CLASS_ELEMENT_MAIN,
        payload: Class
        
    }
}

