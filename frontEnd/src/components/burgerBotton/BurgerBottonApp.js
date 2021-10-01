// estilos
import './burgerBotton.css'

// paquetes
import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export const BurgerBottonApp = ({nameState,action, clases})=>{

    const refBurgerBotton = useRef()
    const burger_Botton = useSelector((state)=>state[nameState])


    const dispatch = useDispatch()

    const handleClickBotton = (active)=>{
        
        if(active){
            for(let item of refBurgerBotton.current.children){
                item.classList.add('burgerBotton-bar-active')
            }   
        }else{
            for(let item of refBurgerBotton.current.children){
                item.classList.remove('burgerBotton-bar-active')
            }
        }
    }

    useEffect(()=>{
        
        refBurgerBotton.current.addEventListener('click',()=>{
            dispatch(action())
        })
        
        
    },[])
    
    useEffect(()=>{
        handleClickBotton(burger_Botton.active)


    },[burger_Botton.active])


    return(
        <div className={`burgerBotton ${clases}`}  ref={refBurgerBotton}>
            <div className="burgerBotton-bar" />
            <div className="burgerBotton-bar" />
            <div className="burgerBotton-bar" />

        </div>
    )
}