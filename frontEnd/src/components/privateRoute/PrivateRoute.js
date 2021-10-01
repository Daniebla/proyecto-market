// Librerías
import { useSelector } from "react-redux"
import { Redirect, Route, useLocation } from "react-router"

// EXPLICACION DE COMPONENTE
// al ingresar a aste componente no cambia la ruta solo redirige a un componente con la ruta pasada por propiedad
// o redirige a alguna ruta requerida pasando la ruta en la que se estaba

export const PrivateRoute = ({component:Component, ...rest}) =>{
    // Se utiliza para obtener el estado si está logeado
    const isUserLogin= useSelector((state)=>state.user_login)
    
    // Se obtiene la ruta actual
    const location = useLocation()
    
    return(
        <Route {...rest}>
            {isUserLogin.login ? <Component/> : <Redirect to={{pathname: "/login", state:{from: location}}}/>}
        </Route>
    )
}