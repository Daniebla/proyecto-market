import {  Route, Switch, useRouteMatch} from "react-router-dom"
import { CuentaApp } from "./cuenta/CuentaApp"

export const PersonalRoutes = ()=>{

    let {path, url} = useRouteMatch()

    return(
        <Switch>
            <Route exact path={path}>
                <>
                {
                    // console.log(111111)
                }
                    <h1>casa</h1>
                    <h1>casa</h1>
                    <h1>casa</h1>
                    <h1>casa</h1>
                    <h1>casa</h1>
                    <h1>casa</h1>
                    <h1>casa</h1>
                </>
            </Route>
            <Route path={`${path}/preguntas`}>
                {/* <h1>dios</h1> */}
                {/* <SubMenuApp/> */}
                {/* <h1>personal/cuenta</h1> */}
                <CuentaApp/>
            </Route>
            <Route path="*">
            <h1> ERROr personal</h1> 
            </Route>
        </Switch>
    )
}