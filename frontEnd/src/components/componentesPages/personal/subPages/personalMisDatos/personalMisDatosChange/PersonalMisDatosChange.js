import { useParams } from "react-router"
import { Redirect, Route, useLocation } from "react-router"

// Componentes
import { PlantillaChange } from "./personalMisDatosChange_Row/PlantillaChange"
import { PruebaComponente2 } from "./personalMisDatosChange_Row/PruebaComponente2"
import { PruebaComponente1 } from "./personalMisDatosChange_Row/PruebaComponente1"

// CONFIG
import nombreCamposBdConfig from '../../../../../../../src/config/nombreCamposBdConfig.json'

export const PersonalMisDatosChange = () =>{

    let {dataName} = useParams()


    console.log(dataName)
    const renderSwitch = ()=>{
        let propComponente, propTitle

        switch(dataName){
            case nombreCamposBdConfig.persona.NOMBREELEGIDO[1]:
                propComponente = <PruebaComponente1/>
                // propTitle = 
                
            break                
            
            case nombreCamposBdConfig.persona.NOMBRECOMPLETO[1]:
                propComponente = <PruebaComponente2/>
                
            break                

            default:
            return <Redirect to={'/personal/misdatos'}/>
        }

        return <PlantillaChange name={nombreCamposBdConfig.persona.NOMBRECOMPLETO[1]} component={propComponente}/>

    }

    return(
        <>

            {/* <h1>personal data change</h1>
            <h1>{dataName}</h1> */}
            {renderSwitch()}
        </>
        
    )
}