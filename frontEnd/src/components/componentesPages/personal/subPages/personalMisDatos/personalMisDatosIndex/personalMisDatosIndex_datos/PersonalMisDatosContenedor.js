import { PersonalMisDatosDireccion } from "./PersonalMisDatosDireccion"
import { PersonalMisDatosRow } from "./PersonalMisDatosRow"
import { PersonalMisDatosTarjeta } from "./PersonalMisDatosTarjeta"

export const PersonalMisDatosContenedor = ({ form, data } ) =>{

    return(
        <div className="PersonalMisDatos_contenedor">
            <p className="PersonalMisDatos_title">{data.title}</p>
            <div className ="PersonalMisDatos_contenido">

            
             { data.tipo === "normal"  && data.lista.map((item,index)=> <PersonalMisDatosRow form={form} item={item} key={index} /> ) }
             { data.tipo === "tarjeta"  && <PersonalMisDatosTarjeta /> }
             { data.tipo === "direccion"  && data.direccion.map((item, index)=> <PersonalMisDatosDireccion key={index} item={item}/> )}
                
                

            </div>
        </div>
    )
}