
import React, {  useEffect, useRef} from 'react';
// import { CarruselElementoNav } from './CarruselElementoNav';
// import { CarruselImagen } from './CarruselImagen';
import { Contenido } from "../contenido/Contenido";

export const Carrusel = ({info,tamanio, cont, carrusel_active})=>{
    // variables

// referencias
    let refCarruselImages = useRef(),
        refCarruselNav = useRef()

        
        // handlers

    // Funcion para seleccionar marcador
    const handleClickNav = (e)=>{

        if(e.target.classList.contains("carrusel_nav-marcador")){
            
            // Remueve la clase marcador
            refCarruselNav.current.children[cont].classList.remove("carrusel_nav-marcador-actual")
            // Obtenemos el nuevo contador
            cont=e.target.id.slice(-1);
            // Agregar clase marcador
            refCarruselNav.current.children[cont].classList.add("carrusel_nav-marcador-actual")
            // Mover carrusel
            carrusel_moveImage(cont)
    
            
        }
    }

    const handleMouseOverImages = ()=> {
        if(carrusel_active) carrusel_active=false;
    }

    const handleMouseOutImages = ()=>{
        if(!carrusel_active) carrusel_active=true;
    }

    // posiciona imagen y boton con datos globales
    const handlePosicionador = ()=> {

        if(carrusel_active === true){
            if(cont >= refCarruselImages.current.children.length-1){
                cont=0;

            }else{
                cont ++;
            }
    
            carrusel_moveImage(cont)
            carrusel_moveMarcador(cont)
        }
    }



    //Funciones para mover el carrusel
    const carrusel_moveImage = (id)=>{
        refCarruselImages.current.style.right=`${id*100}%`
    }

    const carrusel_moveMarcador = (id)=>{
        refCarruselNav.current.children[id].classList.add("carrusel_nav-marcador-actual")

        if(cont >= 1 && cont<= refCarruselImages.current.children.length-1){
            refCarruselNav.current.children[id-1].classList.remove("carrusel_nav-marcador-actual")
            }
            
            else{
                refCarruselNav.current.children[refCarruselImages.current.children.length-1].classList.remove("carrusel_nav-marcador-actual")
            }
    }

// eventos
useEffect(()=>{
    let temporizador
    refCarruselImages.current.addEventListener("mouseover",handleMouseOverImages)

    refCarruselImages.current.addEventListener("mouseout",handleMouseOutImages)
        
    refCarruselNav.current.addEventListener('click',handleClickNav)


    temporizador = setInterval(handlePosicionador,2000)

    return()=>{
        // console.log("ajaj xD");
        clearInterval(temporizador)
    }


},[])



    return(
        <Contenido title='carrusel' clase='carrusel'>
            <div className="carrusel_images carrusell" id="carrusel_images" ref={refCarruselImages} style={{width:tamanio, right:`${cont}00%`}}  >
                { 
                info.images.length > 0 ?(
                    info.images.map(imagen=>(
                        // <CarruselImagen key={imagen.id} dataImagen={imagen}/>
                        <img src={process.env.PUBLIC_URL + imagen.ruta} key= {imagen.id} alt="imagen" className={imagen.class} style={{width: imagen.style}}/>

                    ))
                ):(<></>)
                }
            </div>
            <div className="carrusel_nav" id="carrusel_nav" ref={refCarruselNav} >
                {
                    info.nav.length > 0?(
                        info.nav.map( nav =>(
                            // <CarruselElementoNav key={nav.id} dataElemento={nav}/>
                            <span className={nav.class} id={nav.id} key={nav.id}></span>

                        ))
                    ):(<></>)
                }
            </div>
        </Contenido>
    )
}