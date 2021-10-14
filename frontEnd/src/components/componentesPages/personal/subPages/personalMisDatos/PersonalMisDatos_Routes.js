import { Route, Switch, useRouteMatch} from "react-router-dom"

// Componentes
import { PersonalMisDatosChange } from "./personalMisDatosChange/PersonalMisDatosChange"
import { PersonalMisDatosIndex } from "./personalMisDatosIndex/PersonalMisDatosIndex"

export const PersonalMisDatos_Routes = ()=>{

    let {path } = useRouteMatch()
    

    return(
        <Switch>
            {/* <Route exact path={path} component={PersonalIndex} /> */}
            <Route exact path={`${path}`} component={PersonalMisDatosIndex} />
                
            <Route path={`${path}/change/:dataName`} component={PersonalMisDatosChange} />

            <Route path="*">
            <h1> ERROr personal subruta</h1> 
            </Route>
        </Switch>
    )
}