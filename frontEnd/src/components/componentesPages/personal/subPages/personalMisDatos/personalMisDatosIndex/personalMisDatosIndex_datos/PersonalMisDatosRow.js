import { Link,  useRouteMatch } from "react-router-dom";
import { useLocation } from 'react-router';


export const PersonalMisDatosRow = ({form, item}) => {
    let {path } = useRouteMatch()

    // Se obtiene la ruta actual
    const location = useLocation()
    return(
        <>
            <p className="PersonalMisDatos_rowTitle">{item.rowTitle}</p>
            <div className = "PersonalMisDatos_row">
                <div className="PersonalMisDatos_rowText">
                    { typeof form[item.name] !== 'undefined' ? form[item.name] : '...' }
                </div>
                <Link to={{pathname: `${path}/change/${item.name}`, state:{from: location}}} >
                
                    <div className="PersonalMisDatos_rowChange"/>
                </Link>
            </div>
        </>
    )
}