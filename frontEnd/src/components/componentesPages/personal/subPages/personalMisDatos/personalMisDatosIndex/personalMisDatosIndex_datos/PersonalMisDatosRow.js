
export const PersonalMisDatosRow = ({form, item}) => {

    return(
        // <div className="PersonalMisDatos_row">
        <>
            <p className="PersonalMisDatos_rowTitle">{item.rowTitle}</p>
            <div className = "PersonalMisDatos_row">
                <div className="PersonalMisDatos_rowText">
                    { typeof form[item.name] !== 'undefined' ? form[item.name] : '...'}
                </div>
                
                <div className="PersonalMisDatos_rowChange"/>
            </div>
        </>
        // </div>
    )
}