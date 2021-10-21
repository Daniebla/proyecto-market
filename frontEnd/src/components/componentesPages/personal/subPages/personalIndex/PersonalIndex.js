import { StaticMenuPersonalApp } from "./staticMenuPersonal/StaticMenuPersonalApp"
import {  useState } from "react"

// Config
import StaticMenuConfig from'../../../../../config/personalStaticMenuConfig'

// Helpers

export const PersonalIndex = () =>{

    
    const [personalMenuData] = useState(StaticMenuConfig)

    
    return(<StaticMenuPersonalApp config={personalMenuData} />)
}