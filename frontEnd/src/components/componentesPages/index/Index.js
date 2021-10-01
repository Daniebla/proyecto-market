// import '../base/baseGrid.css'

import { CarruselApp } from "../../carrusel/CarruselApp"
import { DescubrirCategoriasApp } from "../../descubrirCategorias/DescubrirCategoriasApp"
import { SugerenciaArticuloContenidoApp } from "../../sugerenciaArticuloContenido/SugerenciaArticuloContenidoApp"
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { change_class_element_body_action, change_class_element_main_action, change_class_element_header_action } from '../../../baseApp1/redux/actions/bodyClassElementAction'


export const Index = ()=>{
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(change_class_element_body_action('body'))
        dispatch(change_class_element_header_action('header'))
        dispatch(change_class_element_main_action('main'))
        
    },[])

    return(
        <>
            <CarruselApp  cont={0} carrusel_active={true}/>
            <SugerenciaArticuloContenidoApp title={"sugerencia articulo contenido"} key="1"/>
            <DescubrirCategoriasApp title={"Descubrir categorias"}/>
        </>

    )
}