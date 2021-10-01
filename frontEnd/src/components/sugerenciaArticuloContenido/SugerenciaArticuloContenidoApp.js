import React, {  useEffect, useState } from 'react';
import { Contenido } from "../contenido/Contenido"
import { SugerenciaArticuloContenido } from "./SugerenciaArticuloContenido"
import "./sugerenciaArticuloContenidoApp.css"


let initialData = []

export const SugerenciaArticuloContenidoApp = ({title})=>{
    const [data, setData]= useState(initialData)    
    
    useEffect(()=>{
            let dataFetch = [{src:"/logo192.png", precio:1,ventajas:["msi","envio","gratis","descuento","envio","gratis","envio","gratis"]},{src:"/logo192.png",precio:2,ventajas:[2,4,5]}]

            
            setData([...data,...dataFetch])
        },[])
        return(
            // <h1>hola</h1>
        <Contenido title={title} >
            <div className="sugerenciaArticulo_Padre">
                {
                    data.length > 0 ? (
                        data.map((data)=>(
                            // <h1>{data.length} 1</h1>
                            <SugerenciaArticuloContenido data={data} key={data.precio} /> 

                            // <h1 key="1">{data.length} 2</h1>
                    ))
                    ):(
                        <h1>{data.length} 2</h1>
                    )
                    // data.map(data)
                // <SugerenciaArticuloContenido/>
                }
            </div>


        </Contenido>
        )

    }