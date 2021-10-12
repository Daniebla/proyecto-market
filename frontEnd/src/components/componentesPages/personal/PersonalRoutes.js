import { Route, Switch, useRouteMatch} from "react-router-dom"
import { PersonalIndex } from "./subPages/personalIndex/PersonalIndex"
// import { PersonalMisDatosApp } from "./subPages/personalMisDatos/personalMisDatosIndex/personalMisDatosIndex_datos/PersonalMisDatosApp"
import { PersonalMisDatos_Routes } from "./subPages/personalMisDatos/PersonalMisDatos_Routes"

export const PersonalRoutes = ()=>{

    let {path} = useRouteMatch()
    
    return(
        // <PersonalMisDatos_Routes
        <Switch>
            <Route exact path={path} component={PersonalIndex} />

            <Route path={`${path}/credito`}>
                <p>credito</p>
            </Route>

            <Route path={`${path}/preguntas`}>
                <p>Preguntas</p>
            </Route>

            <Route path={`${path}/compras`}>
                <p>compras</p>
            </Route>
            
            <Route path={`${path}/resumen`}>
                <p>resumen</p>
            </Route>

            <Route path={`${path}/novedades`}>
                <p>novedades</p>
            </Route>

            <Route path={`${path}/misdatos`} component={PersonalMisDatos_Routes} />





            <Route path="*">
            <h1> ERROr personal</h1> 
            </Route>
        </Switch>
    )
}