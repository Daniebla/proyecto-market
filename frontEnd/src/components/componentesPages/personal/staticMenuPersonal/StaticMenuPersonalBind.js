import { StaticMenuPersonalRow } from "./StaticMenuPersonalRow"
import { StaticMenuPersonalSeparete } from "./StaticMenuPersonalSeparete"

export const StaticMenuPersonalBind = ({item})=>{

    return(
        <>
            {item.subTitle && <p className="staticMenuPersonalSubTitle"> {item.subTitle_text} </p>}
            <StaticMenuPersonalRow title={item.title} ruta={item.ruta} srcImage={item.srcImage}/> 
            {item.separete && <StaticMenuPersonalSeparete />}
        </>
    )
}