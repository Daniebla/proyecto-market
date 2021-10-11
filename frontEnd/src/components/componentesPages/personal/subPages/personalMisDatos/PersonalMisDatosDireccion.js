
export const PersonalMisDatosDireccion = ( {title, item} )=>{

    return(
        <>
                <div className="PersonalMisDatos_direccionHeader"> 
                    <p className="PersonalMisDatos_direccionTitle">
                        {item.calle}  
                        </p>
                    <div className = "PersonalMisDatos_direccionSettings"/>
                </div>
                <div className="PersonalMisDatos_direccionInfo">
                        {item.lista.map((item,index)=>(    
                         <p className="PersonalMisDatos_direccionInfoParrafo" key={index}>{item.masInfo} </p>
                        ))}
                </div>
                {item.rowSeparete && <div className="PersonalMisDatos_rowSeparete" /> }

        </>

    )
}
