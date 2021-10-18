import { useEffect, useState } from "react"

// Componentes
import { PersonalMisDatosApp } from "./personalMisDatosIndex_datos/PersonalMisDatosApp"

// Config
import nombreCamposBdConfig from '../../../../../../config/nombreCamposBdConfig.json'
import configPersonalMisDatosApp from './personalMisdatosAppConfig.json'

// Helpers
import { cambiarDataColeccion } from "../../../../../../helpers/cambiarDataColeccion"


export const PersonalMisDatosIndex = () => {

    const [configForm, setConfigForm] = useState([])


    

     useEffect(()=>{

            const newData = cambiarDataColeccion(configPersonalMisDatosApp, nombreCamposBdConfig,"name", 1)

            // El nombre de la prpiedad corresponde al nombre de los datos
            setConfigForm(newData.data)

     },[]) 
    return(
        <PersonalMisDatosApp configForm={configForm}/>
    )
}