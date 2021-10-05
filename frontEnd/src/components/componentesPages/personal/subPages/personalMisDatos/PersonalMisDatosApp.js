// CSS
import './PersonalMisDatos.scss'

import React, { useState, useEffect } from 'react';
import { PersonalMisDatosContenedor } from './PersonalMisDatosContenedor';

// Config
import configPersonalMisDatosApp from '../../../../../config/personalMisdatosAppConfig.json'

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
    })

    useEffect(()=>{
      // console.log(configPersonalMisDatosApp.data);
      for(let data of configPersonalMisDatosApp.data){
        // console.log(data);
        // console.log(data.tipo);
      }
    },[])

    

    return(
      <form onSubmit={handleSubmit}>

          {configPersonalMisDatosApp.data.map((data,index)=>( 
            // <p>caca</p>
            // data.tipo == "normal" && <
             <PersonalMisDatosContenedor handleChange={handleChange} form={form} data={data} /> 
              
          ))}
        
        {/* <input type="submit" value="envíame"/> */}
      </form>
            

    )

}