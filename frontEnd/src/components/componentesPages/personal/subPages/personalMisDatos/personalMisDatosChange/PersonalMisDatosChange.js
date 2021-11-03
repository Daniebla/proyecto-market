import { useParams } from "react-router"
import { Redirect, Route, useLocation } from "react-router"

// Componentes
import { ChangeDataApp } from "./ChangeData/ChangeDataApp"
import { Contenedor2App } from "../../../../../contenedor2/Contenedor2App"


// CONFIG
import nombreCamposBdConfig from '../../../../../../../src/config/nombreCamposBdConfig.json'
import {nombreCompleto,nombreElegido, telefono, usuario, correo } from './dataChangeConfig'


export const PersonalMisDatosChange = () =>{

    let {dataName} = useParams()


    // console.log(dataName)
    const renderSwitch = ()=>{
        let  propTitle, initialData = {}

        switch(dataName){
            case nombreCamposBdConfig.persona.NOMBREELEGIDO[1]:
                propTitle = "Editar: " + nombreCamposBdConfig.persona.NOMBREELEGIDO[2]
                initialData = nombreElegido
                
            break                
            
            case nombreCamposBdConfig.persona.NOMBRECOMPLETO[1]:
                propTitle = "Editar: " + nombreCamposBdConfig.persona.NOMBRECOMPLETO[2]
                initialData = nombreCompleto
            break                

            case nombreCamposBdConfig.persona.TELEFONO[1]:
                propTitle = "Editar: " + nombreCamposBdConfig.persona.TELEFONO[2]
                initialData = telefono
            break                


            case nombreCamposBdConfig.persona.USUARIO[1]:
                propTitle = "Editar: " + nombreCamposBdConfig.persona.USUARIO[2]
                initialData = usuario
            break

            case nombreCamposBdConfig.persona.CORREO[1]:
                propTitle = "Editar: " + nombreCamposBdConfig.persona.CORREO[2]
                initialData = correo
            break



            default:
            return <Redirect to={'/personal/misdatos'}/>
        }

        return <Contenedor2App 
                title={propTitle} 
                children={
                    <ChangeDataApp initialData ={initialData} dataName={dataName}/>
                }
            />

    }

    return(
        <>
            {renderSwitch()}
        </>
        
    )
}