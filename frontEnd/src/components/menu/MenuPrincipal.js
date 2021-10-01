// Import CSS
import './menuPrincipal.css'

// Librerías
import React, {  useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";




export const MenuPrincipal = ({ lista, nameState, action })=>{

    let refMenu = useRef()
    const stateBurgerBottonBaseMenu = useSelector((state)=>state[nameState])
    const dispatch = useDispatch()


    
    useEffect(()=>{ 


        // click para cerrar solo en el boton cerrar, en la parte de abajo blanco parece que también hace que se cierre
        refMenu.current.addEventListener('click',(e)=>{
            
            if(!e.target.classList.contains('main-menu-header') && !e.target.classList.contains('main-menu-title'))
                dispatch(action())
        
        })
        
        if(stateBurgerBottonBaseMenu.active){
            refMenu.current.classList.add('main-menu__active')
        }else{
            refMenu.current.classList.remove('main-menu__active')
        }

    },[])
    

    // en caso de cambio estado boton se actualiza el menu
    useEffect(()=>{

        if(stateBurgerBottonBaseMenu.active){
            refMenu.current.classList.add('main-menu__active')
        }else{
            refMenu.current.classList.remove('main-menu__active')
        }

    },[stateBurgerBottonBaseMenu.active])

    return(
        
            <div ref={refMenu} className="main-menu">
                <div className="main-menu-header" >
                    <div className="main-menu-title">Menu</div>
                    <div className="main-menu-cerrar">Cerrar</div>
                </div>
                <nav className="main-menu-lista" >
                    {
                        lista.map((ruta,index)=>(
                            <li className="main-menuLi" key={index}>
                                <Link to={ruta.ruta} className="main-menu__label"> {ruta.ruta} </Link>
                            </li>

                        ))
                    }

                </nav>
            </div>
        
    )
}



/* 
    .main-menu__float#main-menu__float
        i.fab.fa-google
    ul#main-menu.main-menu
                each Pagina in personalDirectorios 
                    li.main-menuLi
                        label.main-menu__label(name = Pagina id= Pagina)=Pagina  
*/