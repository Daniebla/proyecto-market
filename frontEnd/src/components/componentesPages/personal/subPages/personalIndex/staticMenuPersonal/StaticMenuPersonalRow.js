import { useEffect } from "react";
import { Link, useRouteMatch} from "react-router-dom";

export const StaticMenuPersonalRow = ( {title,ruta,srcImage } ) =>{

    const clickeame = ( ) =>{
        console.log("me esta clickeando");
    }
    
    useEffect(()=>{
    //  console.log(title);   
    })

    let {url }= useRouteMatch()

    return(
             <Link className = "staticMenuPersonalRow" onClick={clickeame} to={ `${url}/${ruta}` }>
                     <img className="staticMenuPersonalRow_icon" src={process.env.PUBLIC_URL + srcImage} alt={title}/>

                     <div className="staticMenuPersonalRow_text">
                         {title}
                     </div>
             </Link>
    )
}