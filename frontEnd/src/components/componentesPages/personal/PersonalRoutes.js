import { Route, Switch, useRouteMatch} from "react-router-dom"
import { CuentaApp } from "./cuenta/CuentaApp"
import { PersonalIndex } from "./subPages/personalIndex/PersonalIndex"
import { PersonalMisDatosApp } from "./subPages/personalMisDatos/PersonalMisDatosApp"

export const PersonalRoutes = ( {setActiveMenu} )=>{

    let {path, url} = useRouteMatch()
    
    return(
        <Switch>
            <Route exact path={path}  
            // component={PersonalIndex}/
            >
            <PersonalIndex setActiveMenu={setActiveMenu}/>

            </Route>

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
                <PersonalMisDatosApp />
            </Route>





            <Route path="*">
            <h1> ERROr personal</h1> 
            </Route>
        </Switch>
    )
}