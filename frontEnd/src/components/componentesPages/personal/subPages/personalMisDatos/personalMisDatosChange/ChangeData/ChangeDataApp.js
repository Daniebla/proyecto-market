import './changeDataApp.scss'
// Librerías
import React, { useState, useEffect, useRef } from 'react';

// Componentes
import { BoxChangeData } from "../BoxChangeData/BoxChangeData";
import { DebeCumplir } from "../../../../../../debeCumplir/DebeCumplirApp"

// Helper
import { getUsuario } from '../../../../../../../helpers/isLogin';
import { BotonApp } from '../../../../../../boton/BotonApp';



export const ChangeDataApp = ( { initialData, dataName}) =>{

    const [form, setForm] = useState({})
    const refForm = useRef()

      const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
        console.log("cambios"+ e.target.name);
      };
    
      const handleChecked = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.checked,
        });
      };
    
      const sendSubmit = () =>{
        refForm.current.submit()
      }

      const cancelForm = () =>{
        console.log("slaaldfjklsdjkfllaks")
      }
      const handleSubmit = (e) => {
        e.preventDefault();
        alert("El formulario se ha enviado");
      };

      const getData = () => {
          let jwtUsuario = getUsuario()
        
          fetch(`http://localhost:3000/getData/${dataName}`,{
            method:'post',
            headers:{
              "content-type":"application/json",
              "authorization":jwtUsuario
            }
  
          })
          .then((res)=> res.ok ? Promise.resolve(res) : Promise.reject(res))
          .then( res => res.json())
          .then(res => {
            console.log(res);
            setForm(res)
          })
          
          .catch(res => console.log(res))
    }

      useEffect(()=>{
        getData()
        // refForm.current.submit()
      },[])

    return(
        <form ref = {refForm} onSubmit={handleSubmit}>

            <DebeCumplir initialData = {initialData.debeCumplir}/>

            {
              initialData.forms.length > 0 && 
                initialData.forms.map((dataBox,index)=>
                  dataBox.isTextForm && <BoxChangeData form ={form} dataBox = {dataBox} handleChange={handleChange} key = {index} />    

                )
            }

            <div className="changeDataApp_ContenedorButtons">
              <BotonApp textBotton="Cancelar" sizeBottonCase="form" typeBotton="cancelar" typeInput = "button" />
              <BotonApp textBotton="Enviar" sizeBottonCase="form" typeBotton="enviar" typeInput = "submit"/>
            </div>

        </form>

    )
}