import React, {  useEffect, useRef, useState } from 'react';

import { Contenido } from '../contenido/Contenido';
import { CategoriaIcon } from './CategoriaIcon';
import "./descrubrirCategorias.css"
export const DescubrirCategoriasApp = ({title})=>{

    let refDescubriCategoria = useRef()


    // const [WidthBox,setWidthBox] = useState(0)
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
                    ):(
                        <></>
                    )
                }
            </div>
            <div className="descubrirCategoriaMas">
                Descubrir
            </div>

        </Contenido>
    )
}