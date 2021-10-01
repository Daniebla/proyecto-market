import React, { useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { is_user_login_action } from '../../../baseApp1/redux/actions/userLoginAction';
import { setTokenUsuario } from '../../../helpers/isLogin';

import "./IndexLogin.scss"



export const IndexLogin = () =>{
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        correo: 'angeldanielnieblalopez@gmail.com',
        contra: 'contra1234'
    })
    const [error, setError] = useState(false)
    const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
      };



    const login =  async ()=>{
        // let resCpy
        await fetch('/api/loginPost',{  
            method: 'POST',
            body: JSON.stringify(form),
            headers:{
                "content-type":"application/json"
            }})
        .then((res)=> res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        .then((res)=>{
            console.log("all is fine")
            setError(false)
            setTokenUsuario(res)
            dispatch(is_user_login_action())
        })
        .catch(res =>{
            console.log("catch res");
            setError(true)
            dispatch(is_user_login_action())


        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login()
    };


    useEffect(()=>{
    },[])


    return(
        <>
            {error && <h1>Error login</h1>}
            <div className="Card">
                <div className ="Card_image">
                    logo facebook
                    {/* <img src={ ` ${process.env.PUBLIC_URL}/assets/img/about.jpg`} alt="imagen"></img> */}
                </div>
                <form className="Card_form" onSubmit={handleSubmit}>
                    <input 
                        className="Card_form_input"
                        type="email" 
                        placeholder="correo electronico" 
                        defaultValue="angeldanielnieblalopez@gmail.com"
                        name="correo"
                        onChange={handleChange}   
                    />
                        
                    <input 
                        className="Card_form_input" 
                        type="password" 
                        placeholder="password" 
                        defaultValue="contra123"
                        name="contra"
                        onChange={handleChange}    
                    />

                    <input 
                        className="Card_form_input Card_form_submit" 
                        type = "submit" 
                        value="login"
                    />

                </form>
                <div className="Card_others">
                    <button>Olvide contraseña</button>
                </div>
            </div>
        </>
    )
}