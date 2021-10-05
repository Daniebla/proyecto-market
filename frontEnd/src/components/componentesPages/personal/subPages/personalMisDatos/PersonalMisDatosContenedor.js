import { PersonalMisDatosDireccion } from "./PersonalMisDatosDireccion"
import { PersonalMisDatosRow } from "./PersonalMisDatosRow"
import { PersonalMisDatosTarjeta } from "./PersonalMisDatosTarjeta"

export const PersonalMisDatosContenedor = ({handleChange, form, data} ) =>{

    return(
        <div className="PersonalMisDatos_contenedor">
            <p className="PersonalMisDatos_title">{data.title}</p>
            <div className ="PersonalMisDatos_contenido">

            
             { data.tipo === "normal"  && data.lista.map((item,index)=>( <PersonalMisDatosRow  handleChange={handleChange} form={form} item={item}/> )) }
             { data.tipo === "tarjeta"  && <PersonalMisDatosTarjeta /> }
             { data.tipo === "direccion"  && <PersonalMisDatosDireccion/> }
                
                
                 {/* <div className="PersonalMisDatos_rowSeparete" /> */}

            </div>
        </div>
    )
}