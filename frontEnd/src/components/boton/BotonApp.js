import './botonApp.scss'

import React, { useState } from 'react';


export const BotonApp = ({textBotton, propExactStyles, typeInput, clases, handleClick}) =>{

    const [exactSyles] = useState(propExactStyles)

    
    return(
        <input 
            type ={typeInput} 
            style={exactSyles} 
            defaultValue={textBotton}
            className={clases}
            onClick={handleClick}
        /> 
    )
            
}
BotonApp.defaultProps = {
    typeInput : 'button',
    clases:"",
    textBotton: '',
    handleClick: ()=>{} 
}
