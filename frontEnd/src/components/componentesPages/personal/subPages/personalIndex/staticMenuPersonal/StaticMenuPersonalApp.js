// CSS
import './staticMenuPersonal.scss'

// Librerías
import { useEffect } from 'react'

// Components
import { StaticMenuPersonalBind } from './StaticMenuPersonalBind'

// Menu de personal 
export const StaticMenuPersonalApp = ( {config }) =>{
    
    useEffect(()=>{
        // console.log(config);
    })

    return(
        <div className="staticMenuPersonal">
            {
               config.length && config.map((item,index)=> <StaticMenuPersonalBind item={item} key={index}/>)
            }
        </div>
    )

}