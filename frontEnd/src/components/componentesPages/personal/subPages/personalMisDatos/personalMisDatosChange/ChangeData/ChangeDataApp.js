import './changeDataApp.scss'
// Librerías
import React, { useState, useEffect} from 'react';
import { useHistory, useLocation } from 'react-router';

// Componentes
import { BoxChangeData } from "../BoxChangeData/BoxChangeData";
import { DebeCumplir } from "../../../../../../debeCumplir/DebeCumplirApp"

// Helper
import { getUsuario } from '../../../../../../../helpers/isLogin';
import { BotonApp } from '../../../../../../boton/BotonApp';

// Config
import nombreCamposBdConfig from '../../../../../../../../src/config/nombreCamposBdConfig.json'


export const ChangeDataApp = ( { initialData, dataName}) =>{

    const stylesButtonsDefault = ["bottonApp_sylesInitial bottonApp_sizeBotton_form bottonApp_typeBotton_cancelar", "bottonApp_sylesInitial bottonApp_sizeBotton_form bottonApp_typeBotton_enviar"]
  
    const [stylesButtons] = useState(stylesButtonsDefault)
    const [form, setForm] = useState({})
    const history = useHistory()
    const location = useLocation()


    let previousObjectUrl = location.state?.from

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
    

      const handleCancelForm = () =>{
        history.push(previousObjectUrl || "/")
      }


      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Formulario enviado")

        const handleSubmitPromise = async()=>{
            let resUpdateData = await updateData()
            
            return resUpdateData
        }

        handleSubmitPromise()
        .then(res=>{
          console.log("Todo bien");
          history.push(previousObjectUrl || "/")

        })
        .catch(res =>{
          console.log("Todo mal")
        })
      };

    const updateData = () =>{

      return new Promise ((resolve,reject)=>{
        
        let jwtUsuario = getUsuario()
        let opcionEditar = `${nombreCamposBdConfig.persona.NAMETABLE[1]}_${dataName}`

        fetch(`http://localhost:3000/updateData/${opcionEditar}`,{
          method:'post',
          body:JSON.stringify(form),
          headers:{
            "content-type":"application/json",
            "authorization":jwtUsuario
          }

        })
        .then((res)=> res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then( res => res.json())
        .then(res => {
          console.log(res);
          resolve()
        })
        
        .catch(res => {
          console.log(res)
          reject()
        })
      })
    }

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
      },[])

    return(
        <form  onSubmit={handleSubmit}>

            <DebeCumplir initialData = {initialData.debeCumplir}/>

            {/* Aquí se deben de renderizan todos los formulario necesarios */}
            {
              initialData.forms.length > 0 && 
                initialData.forms.map((dataBox,index)=>
                  dataBox.isTextForm && <BoxChangeData form ={form} dataBox = {dataBox} handleChange={handleChange} key = {index} />  

                )
            }

            <div className="changeDataApp_ContenedorButtons">
              <BotonApp textBotton="Cancelar"  typeInput = "button" clases={stylesButtons[0]} 
              handleClick={handleCancelForm}
              />
              <BotonApp textBotton="Enviar"  typeInput = "submit" clases={stylesButtons[1]}/>
            </div>

        </form>

    )
}