import { StaticMenuPersonalRow } from "./StaticMenuPersonalRow"
import { StaticMenuPersonalSeparete } from "./StaticMenuPersonalSeparete"

export const StaticMenuPersonalBind = ({item})=>{
    // Es el menu de personal
    // Las partes que la conforman es: un separador de categorías, el subtitulo de la categoría y el componenten que es el link junto con texto e Ícono 

    return(
        <>
            {item.separete && <StaticMenuPersonalSeparete />}
            {item.subTitle && <p className="staticMenuPersonalSubTitle"> {item.subTitle_text} </p>}
            <StaticMenuPersonalRow title={item.title} ruta={item.ruta} srcImage={item.srcImage}/> 
        </>
    )
}