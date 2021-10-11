// CSS
import './PersonalMisDatos.scss'

import React, { useState, useEffect } from 'react';
import { PersonalMisDatosContenedor } from './PersonalMisDatosContenedor';

// Config
import configPersonalMisDatosApp from '../../../../../config/personalMisdatosAppConfig.json'
import { json } from 'body-parser';
import { getUsuario } from '../../../../../helpers/isLogin';

export const PersonalMisDatosApp = ({}) =>{

        // variables
        const [form, setForm] = useState({})

        const handleChange = (e) => {
            setForm({
              ...form,
              [e.target.name]: e.target.value,
            });
          };

        const handleSubmit = async (e) => {
          e.preventDefault();
          console.log("me enviaron");
        };
        
    useEffect(()=>{
      console.log(form);
      // console.log("use effect");
    })
    
     
      useEffect(()=>{
          let jwtUsuario = getUsuario()

          fetch('/personal/misdatos',{
            method:'post',
            // body: JSON.stringify({jwt: jwtUsuario}),
            headers:{
              "content-type":"application/json",
              "authorization":jwtUsuario
            }

          })
          .then((res)=> res.ok ? Promise.resolve(res) : Promise.reject(res))
          .then( res => res.json())
          .then(res => 
            {
              console.log(res)
              setForm(res)

            })
          .catch(res => console.log(res))
          
      },[])
     

    return(
      <form onSubmit={handleSubmit}>

          {configPersonalMisDatosApp.data.map((data,index)=> 
            <PersonalMisDatosContenedor 
              handleChange={handleChange} 
              form={form} 
              data={data} 
              key={index}
              /> 
          )}
        
        {/* <input type="submit" value="envíame"/> */}
      </form>
            

    )

}