// styles
import "./Carrusel.css"

// Librerías
import React, { useState, useEffect } from 'react';
import { Carrusel } from "./Carrusel"


export const CarruselApp = (props)=>{

    // const [tamanio, setTamanio] = useState("100%")
    let baseInfo = {
        images:[],
        nav:[]
    }
    const [info, setInfo] = useState(baseInfo)
    // Contador 
    // const [cont , setCont] = useState(props.cont)
    // const [carrusel_active, setCarrusel_active] = useState(props.carrusel_active)
    let cont = props.cont
    let carrusel_active = props.carrusel_active
    const [images] = useState(["/assets/img/about.jpg","/assets/img/about2.jpg","/assets/img/about.jpg","/assets/img/about2.jpg"])
    
    // tamanio
    let tamanio
    if(images.length>=1)
    tamanio = `${images.length}00%`;
    else
    tamanio = '100%'
    
    useEffect(()=>{
        // info molde
        let infoMolde = {
            images:[],
            nav:[]
        }
        
        // carrusel images tamaño

            // info marcador
        for (let indicador in images){
            // info imagen
            let infoImagen = {
                ruta:null,
                class:null,
                id:null,
                style:null
            }
            // info nav
            let infoMarcador = {
                id:null,
                class:null,
            }

            infoImagen.ruta = images[indicador]
            infoImagen.class = "carrusel_images-imagen"
            infoImagen.id= `carrusel_imagen-${indicador}`
            infoImagen.style=`${(100/images.length)}%`;
            
            // NAV
            infoMarcador.id = `carrusel_marcador-${indicador}`
            infoMarcador.class = "carrusel_nav-marcador"
            if(indicador === cont.toString()){
                infoMarcador.class= "carrusel_nav-marcador-actual carrusel_nav-marcador"
            }
            
            // APPEND info
            infoMolde.images.push(infoImagen)
            infoMolde.nav.push(infoMarcador)
            
            // console.log(infoMolde)
        }
        // console.log(infoMolde)
        setInfo(infoMolde)

    },[])

    return(
        <Carrusel info={info} cont={cont}  carrusel_active={carrusel_active} tamanio={tamanio}/>
    )
}