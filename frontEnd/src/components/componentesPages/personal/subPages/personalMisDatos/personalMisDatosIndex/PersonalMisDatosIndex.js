import {  useState } from "react"

// Componentes
import { PersonalMisDatosApp } from "./personalMisDatosIndex_datos/PersonalMisDatosApp"

// Config
import configPersonalMisDatosApp from './personalMisdatosAppConfig'

// Helpers


export const PersonalMisDatosIndex = () => {

    const [configForm] = useState(configPersonalMisDatosApp)

    return(
        <PersonalMisDatosApp configForm={configForm}/>
    )
}