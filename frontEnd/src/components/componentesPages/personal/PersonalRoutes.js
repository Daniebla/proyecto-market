import { Route, Switch, useRouteMatch} from "react-router-dom"

// Componentes
import { PersonalIndex } from "./subPages/personalIndex/PersonalIndex"
import { PersonalMisDatos } from "./subPages/personalMisDatos/PersonalMisDatos"


export const PersonalRoutes = ()=>{

    let {path} = useRouteMatch()
    
    return(
        <Switch>
            {/* menu personal en index */}
            <Route exact path={path} component={PersonalIndex} /> 

            <Route path={`${path}/misdatos`} component={PersonalMisDatos} />

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



            <Route path="*">
            <h1> ERROr personal</h1> 
            </Route>
        </Switch>
    )
}