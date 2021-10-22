import { Link,  useRouteMatch } from "react-router-dom";


export const PersonalMisDatosRow = ({form, item}) => {
    let {path } = useRouteMatch()

    return(
        <>
            <p className="PersonalMisDatos_rowTitle">{item.rowTitle}</p>
            <div className = "PersonalMisDatos_row">
                <div className="PersonalMisDatos_rowText">
                    { typeof form[item.name] !== 'undefined' ? form[item.name] : '...' }
                </div>
                <Link to={`${path}/change/${item.name}`}>
                    <div className="PersonalMisDatos_rowChange"/>
                </Link>
            </div>
        </>
    )
}