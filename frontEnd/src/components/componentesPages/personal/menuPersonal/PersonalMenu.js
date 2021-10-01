import React, { useState, useEffect, useRef } from 'react';
import { Link, useRouteMatch } from "react-router-dom";




import './personalMenu.css'
export const PersonalMenu = ()=>{

    let refBotton = useRef()
    let refMenu = useRef()

    let {path, url} = useRouteMatch()

    
    useEffect(()=>{
        // console.log(refBotton.current)
        refBotton.current.addEventListener('click',()=>{
            console.log("ajaja");
            refMenu.current.classList.toggle('main-menu__active')
            refBotton.current.classList.toggle('main-menu__float__active')
        })

        refMenu.current.addEventListener('click',()=>{
            console.log("xdxdxd ");
            refMenu.current.classList.toggle('main-menu__active')
            refBotton.current.classList.toggle('main-menu__float__active')
        })
        

    },[])



    return(
        <>
            <div ref={refBotton} className="main-menu__float" id="main-menu__float">
                <i>i</i>
            </div>

            <ul ref={refMenu} className="main-menu">
                <li className="main-menuLi">
                    <Link to={`${path}`} className="main-menu__label">home</Link>
                </li>
                <li className="main-menuLi">
                    <Link to={`${path}/cuenta`} className="main-menu__label">cuenta</Link>
                </li>
            </ul>
        </>
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