import { StaticMenuPersonalApp } from "./staticMenuPersonal/StaticMenuPersonalApp"
import { useEffect, useState } from "react"

// Config
import personalMenuConfig from'../../../../../config/personalStaticMenuConfig.json'
import nombreCamposBdConfig from'../../../../../config/nombreCamposBdConfig.json'

// Helpers
import { cambiarDataColeccion } from "../../../../../helpers/cambiarDataColeccion"

export const PersonalIndex = () =>{

    
    const [personalMenuData, setPersonalMenuData] = useState([])

    useEffect(()=>{

        let newData =  cambiarDataColeccion(personalMenuConfig, nombreCamposBdConfig,"title", 2)
            newData =  cambiarDataColeccion(newData, nombreCamposBdConfig,"ruta", 1)
        // El nombre de la prpiedad corresponde al nombre de los datos
        setPersonalMenuData(newData.lista)

        
    },[])
    
    return(<StaticMenuPersonalApp config={personalMenuData} />)

}