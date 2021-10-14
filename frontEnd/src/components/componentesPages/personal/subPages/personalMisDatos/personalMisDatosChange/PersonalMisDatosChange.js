import { useParams } from "react-router"
import { Redirect, Route, useLocation } from "react-router"

// Componentes
import { PersonalMisDatosChange_RowApp } from "./personalMisDatosChange_Row/PersonalMisDatosChange_RowApp"
import { PruebaComponente2 } from "./personalMisDatosChange_Row/PruebaComponente2"
import { PruebaComponente1 } from "./personalMisDatosChange_Row/PruebaComponente1"

// CONFIG
import nombreCamposBdConfig from '../../../../../../../src/config/nombreCamposBdConfig.json'

export const PersonalMisDatosChange = () =>{

    let {dataName} = useParams()


    console.log(dataName)
    const renderSwitch = ()=>{
        switch(dataName){
            case dataName:
                // if(
                //     dataName === nombreCamposBdConfig.persona.
                // )
                // console.log("Nombre completo");
                let componenteProp = < PruebaComponente2 />
                return <PersonalMisDatosChange_RowApp name={nombreCamposBdConfig.persona.NOMBRECOMPLETO} component={componenteProp}/>
                
            
            case nombreCamposBdConfig.persona.NOMBREELEGIDO:
                // console.log("Nombre elegido");
                return(
                    <PersonalMisDatosChange_RowApp name={nombreCamposBdConfig.persona.NOMBREELEGIDO}/>
                )
            

            default:
                return <Redirect to={'/personal/misdatos'}/>
        }
    }

    return(
        <>

            {/* <h1>personal data change</h1>
            <h1>{dataName}</h1> */}
            {renderSwitch()}
        </>
        
    )
}