import './subMenu.css'

import React, {  useEffect,  useRef } from 'react';
import { Link, useRouteMatch } from "react-router-dom";
import { BurgerBottonApp } from '../burgerBotton/BurgerBottonApp';
import { MenuPrincipal } from '../menu/MenuPrincipal';
import { toggle_button_personal_menu_action } from '../../baseApp1/redux/actions/burgerBottonPersonalMenuAction';


    export const SubMenuApp = ({lista})=>{
    // Variables
        // let {path, url} = useRouteMatch()
        let refSumbMenu_bar = useRef()
        
    // funciones
        const handlerLinksMenu = ()=>{

                let tamanioMenu = refSumbMenu_bar.current.clientWidth,
                tamanioAlcanzado = 0

            
                for(let item of refSumbMenu_bar.current.children){

                    item.classList.remove('SubMenu-item-hidden')
                    if(tamanioMenu >= tamanioAlcanzado+item.clientWidth){
                        tamanioAlcanzado = tamanioAlcanzado+item.clientWidth
                    }else{
                        item.classList.add('SubMenu-item-hidden')

                    }
                    
                }
        }
    
    // Efectos
        useEffect(()=>{
        
            handlerLinksMenu()
            let handleMenu = setInterval(handlerLinksMenu,2000)

            return ()=>{
                clearInterval(handleMenu)
            }

            
        },[])


        



        return(
            // <SubMenu/>
            <>
            {/* <MenuPrincipal nameState={"burger_botton_personal_menu"} lista={lista} action={toggle_button_personal_menu_action}/> */}

            <section className="SubMenu">
                <BurgerBottonApp nameState={"burger_botton_personal_menu"} action={toggle_button_personal_menu_action}/>
                <div className="SubMenu_bar" ref = {refSumbMenu_bar}>
                    {
                        lista.map((ruta,index)=>(
                            <Link to={ruta.ruta} key={index} className = "SubMenu-item"> {ruta.ruta} </Link>
                            ))
                        }
                </div>
                
            </section>
            <MenuPrincipal nameState={"burger_botton_personal_menu"} lista={lista} action={toggle_button_personal_menu_action}/>
        
        </>
        )
    
    }