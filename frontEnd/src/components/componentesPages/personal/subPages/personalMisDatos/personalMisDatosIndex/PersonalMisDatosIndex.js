import { useEffect, useState } from "react"
import { PersonalMisDatosApp } from "./personalMisDatosIndex_datos/PersonalMisDatosApp"

// Config
import nombreCamposBdConfig from '../../../../../../config/nombreCamposBdConfig.json'
import configPersonalMisDatosApp from './personalMisdatosAppConfig.json'
import { cambiarDataColeccion } from "../../../../../../helpers/cambiarDataColeccion"


export const PersonalMisDatosIndex = () => {

    const [configForm, setConfigForm] = useState([])


    

     useEffect(()=>{
         const cambiarData = async ()=>{
            // Copia el objeto
            let copiaConfigPersonalMisDatosApp = JSON.stringify(configPersonalMisDatosApp)
                copiaConfigPersonalMisDatosApp = JSON.parse(copiaConfigPersonalMisDatosApp)

            const newData = await cambiarDataColeccion(copiaConfigPersonalMisDatosApp, nombreCamposBdConfig,"name", 1)
            // console.log(newData.data);
            setConfigForm(newData.data)
         }
         cambiarData()

     },[]) 
    return(
        <PersonalMisDatosApp configForm={configForm}/>
    )
}