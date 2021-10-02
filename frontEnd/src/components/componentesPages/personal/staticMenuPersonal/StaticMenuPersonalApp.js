// CSS
import './staticMenuPersonal.scss'

// Librerías
import { useEffect } from 'react'

// Components
import { StaticMenuPersonalBind } from './StaticMenuPersonalBind'

export const StaticMenuPersonalApp = ( {config}) =>{

    
    useEffect(()=>{
        console.log(config);
    })

    return(
    
        
        <div className="staticMenuPersonal">
            {
                config.map((item,index)=> <StaticMenuPersonalBind item={item} key={index}/>)
            }
        </div>

    )

}