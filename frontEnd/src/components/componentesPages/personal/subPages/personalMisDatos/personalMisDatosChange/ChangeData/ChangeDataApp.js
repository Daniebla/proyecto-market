// Librerías
import React, { useState, useEffect } from 'react';

// Componentes
import { BoxChangeData } from "../BoxChangeData/BoxChangeData";
import { DebeCumplir } from "../../../../../../debeCumplir/DebeCumplirApp"

// Helper
import { getUsuario } from '../../../../../../../helpers/isLogin';



export const ChangeDataApp = ( { initialData }) =>{

    const [form, setForm] = useState({})


    const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleChecked = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.checked,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        alert("El formulario se ha enviado");
      };


      const getData = () => {
          let jwtUsuario = getUsuario()
        
          fetch('http://localhost:3000/personal/misdatos',{
            method:'post',
            // body: JSON.stringify({jwt: jwtUsuario}),
            headers:{
              "content-type":"application/json",
              "authorization":jwtUsuario
            }
  
          })
          .then((res)=> res.ok ? Promise.resolve(res) : Promise.reject(res))
          .then( res => res.json())
          .then(res => setForm(res))
          .catch(res => console.log(res))
    }

      useEffect(()=>{
        getData()
      },[])

    return(
        <>
            <DebeCumplir initialData = {initialData.debeCumplir}/>

            {initialData.isTextForm && 
                initialData.textForms.map((dataBox,index)=>(
                    <BoxChangeData form ={form} dataBox = {dataBox} handleChange={handleChange} key = {index} />   
                ))
            }
        </>
    )
}
