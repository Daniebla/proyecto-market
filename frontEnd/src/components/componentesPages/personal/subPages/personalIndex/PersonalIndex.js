import { StaticMenuPersonalApp } from "./staticMenuPersonal/StaticMenuPersonalApp"
import { useEffect, useState } from "react"
import { cambiarDataColeccion } from "../../../../../helpers/cambiarDataColeccion"

// Config
import personalMenuConfig from'../../../../../config/personalStaticMenuConfig.json'
import nombreCamposBdConfig from'../../../../../config/nombreCamposBdConfig.json'

export const PersonalIndex = () =>{

    
    const [personalMenuData, setPersonalMenuData] = useState(personalMenuConfig )

    useEffect(()=>{
        const cambiarData = async ()=>{
            // Copia el objeto
            let copiaPersonalMenuConfig = JSON.stringify(personalMenuConfig)
                copiaPersonalMenuConfig = JSON.parse(copiaPersonalMenuConfig)

            const newData = await cambiarDataColeccion(copiaPersonalMenuConfig, nombreCamposBdConfig,"name", 1)
            // console.log(newData.data);
            setPersonalMenuData(newData)
         }
        //  cambiarData()


    },[])
    
    return(<StaticMenuPersonalApp config={personalMenuData.lista} />)

}