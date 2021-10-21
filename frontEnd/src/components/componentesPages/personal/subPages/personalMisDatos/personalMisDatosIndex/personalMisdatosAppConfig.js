import CamposBdConfig from '../../../../../../config/nombreCamposBdConfig.json'


    const data = [
        {
             tipo: "normal",
             title:"Datos de cuenta",
             lista:[
             {rowTitle:"Usuario",name:CamposBdConfig.persona.USUARIO[1]},
             {rowTitle:"E-mail",name:CamposBdConfig.persona.CORREO[1]}
             ]
        },{ 
            tipo:"normal",
            title:"Datos personales",
            lista:[
             {rowTitle:"Nombre y apellido",name:CamposBdConfig.persona.NOMBRECOMPLETO[1]},
             {rowTitle:"Nombre elegido",name:CamposBdConfig.persona.NOMBREELEGIDO[1]},
             {rowTitle:"Documento", name: CamposBdConfig.persona.DOCUMENTO[1]},
             {rowTitle:"Teléfono", name:CamposBdConfig.persona.TELEFONO[1]}
            ]
        },{ 
            tipo: "tarjeta",
            title:"Tarjetas",
            lista:[
                {"terminacion":"",tipo:"","propietario":""}
             ]
        },{
            tipo:"direccion",
            title:"Direcciones",
            "direccion":[
                {
                 lista:[
                    {"masInfo":"mas info 1"},
                    {"masInfo":"mas info 2"}
                 ],
                 "rowSeparete": true,
                 "calle":"carlotas"
                
                },
                {
                 lista:[
                    {"masInfo":"mas info 3"},
                    {"masInfo":"mas info 4"}
                 ],
                 "rowSeparete": false,
                 "calle":"marquita"
                }
            ]
        }
    ]
    
export default data
