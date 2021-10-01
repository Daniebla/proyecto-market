import { useSelector } from "react-redux"
import { Redirect, Route, useLocation } from "react-router"


export const PrivateRoute = ({component:Component, ...rest}) =>{

    const isUserLogin= useSelector((state)=>state.user_login)
    const location = useLocation()
    // console.log(location);

    return(
        <Route {...rest}>
            {isUserLogin.login ? <Component/> : <Redirect to={{pathname: "/login", state:{from: location}}}/>}
        </Route>
    )
}