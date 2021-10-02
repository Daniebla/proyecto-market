import {  Route, Switch, useRouteMatch} from "react-router-dom"
import { CuentaApp } from "./cuenta/CuentaApp"
import { PersonalIndex } from "./subPages/personalIndex/PersonalIndex"
import { PersonalMisDatos } from "./subPages/personalMisDatos/PersonalMisDatos"

export const PersonalRoutes = ( {} )=>{

    let {path, url} = useRouteMatch()
    
    return(
        <Switch>
            <Route exact path={path}  component={PersonalIndex}/>

            <Route path={`${path}/credito`}>
            <p>credito</p>

            </Route>
            <Route path={`${path}/preguntas`}>
                <CuentaApp/>
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


            <Route path={`${path}/misdatos`}>
                {/* <p>my data</p> */}
                <PersonalMisDatos />
            </Route>





            <Route path="*">
            <h1> ERROr personal</h1> 
            </Route>
        </Switch>
    )
}