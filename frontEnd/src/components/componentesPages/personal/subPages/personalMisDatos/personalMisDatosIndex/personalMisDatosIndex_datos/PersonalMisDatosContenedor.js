import { PersonalMisDatosDireccion } from "./PersonalMisDatosDireccion"
import { PersonalMisDatosRow } from "./PersonalMisDatosRow"
import { PersonalMisDatosTarjeta } from "./PersonalMisDatosTarjeta"
import {Contenedor2App} from "../../../../../../contenedor2/Contenedor2App"

export const PersonalMisDatosContenedor = ({ form, data } ) =>{

    return(
            <Contenedor2App title={data.title}>
                { data.tipo === "normal"  && data.lista.map((item,index)=> <PersonalMisDatosRow form={form} item={item} key={index} /> ) }
                { data.tipo === "tarjeta"  && <PersonalMisDatosTarjeta /> }
                { data.tipo === "direccion"  && data.direccion.map((item, index)=> <PersonalMisDatosDireccion key={index} item={item}/> )}
            </Contenedor2App>                
    )
}
            