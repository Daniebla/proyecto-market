import { StaticMenuPersonalApp } from "../../staticMenuPersonal/StaticMenuPersonalApp"
import config from'../../../../../config/personalStaticMenuConfig.json'


export const PersonalIndex = () =>{

    return(<StaticMenuPersonalApp config={config.lista} />)

}