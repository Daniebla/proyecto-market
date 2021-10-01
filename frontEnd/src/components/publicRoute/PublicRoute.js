import { useSelector } from "react-redux"
import { Redirect, Route } from "react-router"


export const PublicRoute = ({component:Component, ...rest}) =>{

    const isUserLogin= useSelector((state)=>state.user_login)
    
    return(
        <Route {...rest}>
            {!isUserLogin.login ? <Component/> : <Redirect to="/"/> }
        </Route>
    )
}