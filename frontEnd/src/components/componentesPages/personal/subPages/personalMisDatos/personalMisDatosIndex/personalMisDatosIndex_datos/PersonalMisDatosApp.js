// CSS
import './PersonalMisDatos.scss'

// Librerías
import React, { useState, useEffect } from 'react';

// Componentes
import { PersonalMisDatosContenedor } from './PersonalMisDatosContenedor';

// Config
import configPersonalMisDatosApp from '../personalMisdatosAppConfig.json'
import nombreCamposBdConfig from '../../../../../../../config/nombreCamposBdConfig.json'

// Helpers
import { getUsuario } from '../../../../../../../helpers/isLogin';

export const PersonalMisDatosApp = () =>{

        const configurarNamesMisDatos = (configData) =>{
          configData[0].lista[0].name = nombreCamposBdConfig.persona.USUARIO
          configData[0].lista[1].name = nombreCamposBdConfig.persona.CORREO
          configData[1].lista[0].name = nombreCamposBdConfig.persona.NOMBRECOMPLETO
          configData[1].lista[1].name = nombreCamposBdConfig.persona.NOMBREELEGIDO
          configData[1].lista[2].name = nombreCamposBdConfig.persona.DOCUMENTO
          configData[1].lista[3].name = nombreCamposBdConfig.persona.TELEFONO
          
          return configData
        }
        // variables
        const [form, setForm] = useState({})
        const [configForm, setConfigForm] = useState([])
        
        
        useEffect(()=>{
          let jwtUsuario = getUsuario()
          let configData = configurarNamesMisDatos(configPersonalMisDatosApp.data) 
          setConfigForm(configData)

          
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

      useEffect(()=>{
        console.log(form)
      })
     

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
              <></>
            }

        </>
            

    )

}