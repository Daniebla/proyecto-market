// librería
import {  Route, Switch } from "react-router-dom"
import { PrivateRoute } from "../../../privateRoute/PrivateRoute";
import { PublicRoute } from "../../../publicRoute/PublicRoute";

// Componentes
import { Index } from '../../index/Index';
import { Login } from "../../login/Login";
import { Personal } from '../../personal/Personal';


// help


const BaseRoutes = ({setRuta})=>{

    return(        
            <Switch>
                <Route exact path="/" component={Index} />
                <PublicRoute exact path="/login" component={Login}/>
                <PrivateRoute path="/personal" component={Personal}/>
                    
                    
                <Route path="*">
                    <h1> ERROR</h1> 
                </Route>
            </Switch>
    )
}

export default BaseRoutes






