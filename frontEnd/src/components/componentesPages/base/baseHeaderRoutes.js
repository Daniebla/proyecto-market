import { Switch,Route } from "react-router"
import BaseMenu from "./BaseMenu/BaseMenu"



export const BaseHeaderRoutes = ({setRuta})=>{

    return(        
            <Switch>
                <Route exact path="/"  component={BaseMenu}/>
                
                <Route path="/personal" component={BaseMenu}/>
                {/* <Route exact path="/login" > 
                </Route> */}
                

                
                    
                {/* <Route path="*">
                    <h1> ERROR</h1> 
                </Route> */}
            </Switch>
    )
}