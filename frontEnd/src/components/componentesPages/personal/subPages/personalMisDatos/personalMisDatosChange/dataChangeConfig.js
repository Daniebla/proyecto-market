import CamposBdConfig from '../../../../../../config/nombreCamposBdConfig.json'
import { validateRegex } from '../../../../../../helpers/validateRegex'


export  let nombreCompleto = {
            debeCumplir: [
            "1 sdfsd sdfsf sadf sfsf as afsa"
            ,"2 sdfsd sdfsf sadf sfsf as afsa"
            ,"3 sdfsd sdfsf sadf sfsf as afsa"
            ,"4 sdfsd sdfsf sadf sfsf as afsa"
            ,"5 sdfsd sdfsf sadf sfsf as afsa"],
            expresionRegular: "",
            forms:[
                {
                    isTextForm:true,    
                    validationForm:()=>true,    
                    title: CamposBdConfig.persona.NOMBRECOMPLETO[2],
                    name: CamposBdConfig.persona.NOMBRECOMPLETO[1]
                }
                
            ]
        
         }

export  let nombreElegido = {
        debeCumplir: [
         "1 sdfsd sdfsf sadf sfsf as afsa"
        ,"2 sdfsd sdfsf sadf sfsf as afsa"
        ,"3 sdfsd sdfsf sadf sfsf as afsa"
        ,"4 sdfsd sdfsf sadf sfsf as afsa"
        ,"5 sdfsd sdfsf sadf sfsf as afsa"],
        expresionRegular: "",
        forms:[
            {
                isTextForm:true,
                validationForm:()=>true,    
                title: CamposBdConfig.persona.NOMBREELEGIDO[2],
                name: CamposBdConfig.persona.NOMBREELEGIDO[1]
            }
        ]
    }

export  let telefono = {
        debeCumplir: [
         "1 sdfsd sdfsf sadf sfsf as afsfa"
        ,"2 sdfsd sdfsf sadf sfsf as afsa"
        ,"3 sdfsd sdfsf sadf sfsf as afsa"
        ,"4 sdfsd sdfsf sadf sfsf as afsa"
        ,"5 sdfsd sdfsf sadf sfsf as afsa"],
        expresionRegular: "",
        forms:[
            {
                isTextForm:true,    
                validationForm:()=>true,
                title: CamposBdConfig.persona.TELEFONO[2],
                name: CamposBdConfig.persona.TELEFONO[1]
            }
        ]
    }


export  let usuario = {
        debeCumplir: [
        "1 sdfsd sdfsf sadf sfsf as afsa asd fads fads fdsa"
        ,"2 sdfsd sdfsf sadf sfsf as afsa"
        ,"3 sdfsd sdfsf sadf sfsf as afsa"
        ,"4 sdfsd sdfsf sadf sfsf as afsa"
        ,"5 sdfsd sdfsf sadf sfsf as afsa"],
        expresionRegular: "",
        forms:[
            {
                isTextForm:true,    
                validationForm:validateRegex.validateUsername,
                title: CamposBdConfig.persona.USUARIO[2],
                name: CamposBdConfig.persona.USUARIO[1]
            }
        ]
}


    
export  let correo = {
        debeCumplir: [
        "1 sdfsd sdfsf sadf sfsf as afsa asd fads fads fdsa"
        ,"2 sdfsd sdfsf sadf sfsf as afsa"
        ,"3 sdfsd sdfsf sadf sfsf as afsa"
        ,"4 sdfsd sdfsf sadf sfsf as afsa"
        ,"5 sdfsd sdfsf sadf sfsf as afsa"],
        expresionRegular: "",
        forms:[
            {
                isTextForm:true,    
                validationForm: validateRegex.validateEmail,
                title: CamposBdConfig.persona.CORREO[2],
                name: CamposBdConfig.persona.CORREO[1]
            }
        ]
}