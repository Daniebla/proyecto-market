// Import CSS
import "./descrubrirCategorias.css"

// Librerías
import React, {  useEffect, useRef, useState } from 'react';

// Componentes
import { Contenido } from '../contenido/Contenido';
import { CategoriaIcon } from './CategoriaIcon';

export const DescubrirCategoriasApp = ({title})=>{
    // Inicialización
    let refDescubriCategoria = useRef()
    const [Categorias, setCategorias] = useState(null)

    
    const getCategorias = ()=>{
        setCategorias([1,2,3,4,5,6,7,8])

    }

    
    useEffect(()=>{
        getCategorias()
    },[])

    






    return(
        <Contenido title={title} >
            <div className={`descubrirCategoria`} ref={refDescubriCategoria} >
                {
                    Categorias != null?(
                        Categorias.map((value,index)=>(
                            <CategoriaIcon value={value} key={index}/>
                        ))
                    ):(<></>)
                }
            </div>
            <div className="descubrirCategoriaMas">
                Descubrir
            </div>

        </Contenido>
    )
}