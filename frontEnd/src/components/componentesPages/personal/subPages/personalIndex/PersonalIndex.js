import { StaticMenuPersonalApp } from "./staticMenuPersonal/StaticMenuPersonalApp"
import config from'../../../../../config/personalStaticMenuConfig.json'
import { useEffect } from "react"


export const PersonalIndex = () =>{

    useEffect(()=>{
        // setActiveMenu(true)
    },[])
    
    return(<StaticMenuPersonalApp config={config.lista} />)

}