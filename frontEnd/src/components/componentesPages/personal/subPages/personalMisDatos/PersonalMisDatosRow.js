
export const PersonalMisDatosRow = ({handleChange, form, item}) => {

    return(
        // <div className="PersonalMisDatos_row">
        <>
            <p className="PersonalMisDatos_rowTitle">{item.rowTitle}</p>
            <input className="PersonalMisDatos_rowText" type="text" onChange={handleChange} value={form.name} name={item.name}/>
        </>
        // </div>
    )
}