import { Link } from "react-router-dom";

export const StaticMenuPersonalRow = ( {title,ruta,srcImage } ) =>{

    const clickeame = ( ) =>{
        console.log("me esta clickeando");
    }
    
    return(
             <Link className = "staticMenuPersonalRow" onClick={clickeame} to={ruta}>
                     <img className="staticMenuPersonalRow_icon" src={process.env.PUBLIC_URL + srcImage} alt={title}/>

                     <div className="staticMenuPersonalRow_text">
                         {title}
                     </div>
             </Link>
    )
}