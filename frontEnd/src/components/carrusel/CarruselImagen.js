import React, {useRef, useEffect} from 'react';

export const CarruselImagen = ({dataImagen})=>{


    let refImagen = useRef()

    // useEffect(()=>{

    //     console.log(refImagen)
    // })
    
    return (
         <img src={process.env.PUBLIC_URL + dataImagen.ruta} alt="imagen" className={dataImagen.class} ref={refImagen} style={{width: dataImagen.style}}/>
    )
}