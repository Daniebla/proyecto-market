import CamposBdConfig from '../../../../../../config/nombreCamposBdConfig.json'


export  let nombreCompleto = {
            isTextForm:true,    
            debeCumplir: [
            "1 sdfsd sdfsf sadf sfsf as afsa"
            ,"2 sdfsd sdfsf sadf sfsf as afsa"
            ,"3 sdfsd sdfsf sadf sfsf as afsa"
            ,"4 sdfsd sdfsf sadf sfsf as afsa"
            ,"5 sdfsd sdfsf sadf sfsf as afsa"],
            expresionRegular: "",
            textForms:[
                {
                    title: CamposBdConfig.persona.NOMBRECOMPLETO[2],
                    name: CamposBdConfig.persona.NOMBRECOMPLETO[1]
                }
                
            ]
        
         }

export  let nombreElegido = {
        isTextForm:true,
        debeCumplir: [
         "1 sdfsd sdfsf sadf sfsf as afsa"
        ,"2 sdfsd sdfsf sadf sfsf as afsa"
        ,"3 sdfsd sdfsf sadf sfsf as afsa"
        ,"4 sdfsd sdfsf sadf sfsf as afsa"
        ,"5 sdfsd sdfsf sadf sfsf as afsa"],
        expresionRegular: "",
        textForms:[
            {
                title: CamposBdConfig.persona.NOMBREELEGIDO[2],
                name: CamposBdConfig.persona.NOMBREELEGIDO[1]
            }
        ]
    }

    
