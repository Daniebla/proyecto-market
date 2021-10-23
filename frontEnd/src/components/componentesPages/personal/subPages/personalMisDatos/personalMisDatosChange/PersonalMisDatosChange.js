import { useParams } from "react-router"
import { Redirect, Route, useLocation } from "react-router"

// Componentes
import { ChangeDataApp } from "./ChangeData/ChangeDataApp"


// CONFIG
import nombreCamposBdConfig from '../../../../../../../src/config/nombreCamposBdConfig.json'
import { Contenedor2App } from "../../../../../contenedor2/Contenedor2App"
import {nombreCompleto,nombreElegido } from './dataChangeConfig'


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