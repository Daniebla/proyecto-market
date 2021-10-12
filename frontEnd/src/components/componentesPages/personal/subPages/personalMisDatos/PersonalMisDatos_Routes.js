import { Route, Switch, useRouteMatch} from "react-router-dom"
import { PersonalMisDatosIndex } from "./personalMisDatosIndex/PersonalMisDatosIndex"

export const PersonalMisDatos_Routes = ()=>{

    let {path} = useRouteMatch()
    

    return(
        <Switch>
            {/* <Route exact path={path} component={PersonalIndex} /> */}
            <Route path={`${path}`} component={PersonalMisDatosIndex} />
                
            <Route path={`${path}/credito`}>
                <p>credito</p>
            </Route>

            <Route path="*">
            <h1> ERROr personal subruta</h1> 
            </Route>
        </Switch>
    )
}