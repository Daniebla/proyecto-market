import React, { useState, useEffect } from 'react';

import './textBoxForm.scss'


export const TextBoxFormApp = ({form, name, handleChange, validationForm}) =>{    

    const validateChange = (e) =>{
        // if(false)
        if(validationForm(e.target.value)) 
            handleChange(e)
        else
            console.log("Error en formulario: "+name);
    }

    return(
        <input 
            type ="text" 
            className ="textBoxForm" 
            name = {name} 
            value = { typeof form[name] !== 'undefined' ? form[name] : '...' }
            onChange = {validateChange} 
        />

    )
}