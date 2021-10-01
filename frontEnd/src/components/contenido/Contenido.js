// Import CSS
import './Contenido.css'

// Librerías
import React from 'react';


export const Contenido = ({children, title, id, clase})=>{


    return(
        <section className={`atributes_box_index ${clase}`} >
            <p className="atributes_box_index_titulo" >{title}</p>
            {children}
        </section>
    )
}


Contenido.defaultProps = {
    id:"",
    clase:""
}