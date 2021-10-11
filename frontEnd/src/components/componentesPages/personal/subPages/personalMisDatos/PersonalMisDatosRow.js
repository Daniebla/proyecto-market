
export const PersonalMisDatosRow = ({handleChange, form, item}) => {

    return(
        // <div className="PersonalMisDatos_row">
        <>
            <p className="PersonalMisDatos_rowTitle">{item.rowTitle}</p>
            {/* <input className="PersonalMisDatos_rowText" type="text" onChange={handleChange} value={form.name} name={item.name}/> */}
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