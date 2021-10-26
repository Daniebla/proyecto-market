// CSS
import './PersonalMisDatos.scss'

// Librerías
import React, { useState, useEffect } from 'react';

// Componentes
import { PersonalMisDatosContenedor } from './PersonalMisDatosContenedor';

// Helpers
import { getUsuario } from '../../../../../../../helpers/isLogin';

export const PersonalMisDatosApp = ({configForm}) =>{

        // variables
        const [form, setForm] = useState({})
        
        useEffect(()=>{
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
          
        },[])

     

    return(
        <>
            {/* Crea las secciones y el contenido de datos personales */}
            {configForm.length > 0 ? configForm.map((data,index)=> 
              <PersonalMisDatosContenedor 
                form={form} 
                data={data} 
                key={index}
              />) 
              :  
              null
            }

        </>
            

    )

}