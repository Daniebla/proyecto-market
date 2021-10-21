import { useParams } from "react-router"
import { Redirect, Route, useLocation } from "react-router"

// Componentes
import { PruebaComponente2 } from "./ChangeRow/PruebaComponente2"
import { PruebaComponente1 } from "./ChangeRow/PruebaComponente1"

// CONFIG
import nombreCamposBdConfig from '../../../../../../../src/config/nombreCamposBdConfig.json'
import { Contenedor2App } from "../../../../../contenedor2/Contenedor2App"
import dataChangeRow from './dataChange.json'


export const PersonalMisDatosChange = () =>{

    let {dataName} = useParams()


    // console.log(dataName)
    const renderSwitch = ()=>{
        let propComponente, propTitle, objetoData

        switch(dataName){
            case nombreCamposBdConfig.persona.NOMBREELEGIDO[1]:
                propComponente = <PruebaComponente1/>
                propTitle = "Editar: " + nombreCamposBdConfig.persona.NOMBRECOMPLETO[2]
                objetoData = dataChangeRow.nombreElegido
                
            break                
            
            case nombreCamposBdConfig.persona.NOMBRECOMPLETO[1]:
                propComponente = <PruebaComponente2/>
                propTitle = "Editar: " + nombreCamposBdConfig.persona.NOMBRECOMPLETO[2]
                objetoData = dataChangeRow.nombreCompleto
            break                

            default:
            return <Redirect to={'/personal/misdatos'}/>
        }

         return <Contenedor2App title={propTitle} children={propComponente}/>

    }

    return(
        <>
            
            {/* <h1>personal data change</h1>
            <h1>{dataName}</h1> */}
            {renderSwitch()}
        </>
        
    )
}