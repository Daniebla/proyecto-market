import './contenedor2.scss'
export const Contenedor2App = ({children, title}) =>{

    return(

        <div className="contenedor2">
            <h1 className="contenedor2_title">{title}</h1>
            <div className ="contenedor2_contenido">
                {children}
            </div>
        </div>


    )
}