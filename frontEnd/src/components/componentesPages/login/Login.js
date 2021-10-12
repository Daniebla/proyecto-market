// CSS
import "./IndexLogin.scss"

// Librerías
import React, { useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router';

// Componentes
import { is_user_login_action } from '../../../baseApp1/redux/actions/userLoginAction';
import { setTokenUsuario } from '../../../helpers/isLogin';

// Redux actions
import { change_class_element_body_action, change_class_element_main_action, change_class_element_header_action } from '../../../baseApp1/redux/actions/bodyClassElementAction'




export const Login = () =>{
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()

    // variables
    const [form, setForm] = useState({
        correo: 'correo@gmail.com',
        contra: '1'
    })
    const [error, setError] = useState(false)
    const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
      };
    let previousObjectUrl = location.state?.from

    const login =  async ()=>{
        // let resCpy
        await fetch('http://localhost:3000/api/loginPost',{  
            method: 'POST',
            body: JSON.stringify(form),
            headers:{"content-type":"application/json"}
        })
        .then((res)=> res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then( res => res.json())
        .then((res)=>{
            console.log("all is fine")
            setError(false)
            setTokenUsuario(res)
            dispatch(is_user_login_action())
            history.push(previousObjectUrl || "/")

        })
        .catch(res =>{
            console.log("catch res");
            setError(true)
            dispatch(is_user_login_action())


        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login()
        // history.push(previousObjectUrl || "/")
    };

    
    useEffect(()=>{
        dispatch(change_class_element_body_action('body_login'))
        dispatch(change_class_element_main_action('main_login'))
        dispatch(change_class_element_header_action('header_login'))
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
                        defaultValue="correo@gmail.com"
                        name="correo"
                        onChange={handleChange}   
                    />
                        
                    <input 
                        className="Card_form_input" 
                        type="password" 
                        placeholder="password" 
                        defaultValue="1"
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