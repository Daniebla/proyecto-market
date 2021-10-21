import './boxChangeData.scss'

export const BoxChangeData = ({dataBox}) =>{

    return(
        <div className="boxChangeData_data">
            <p className="boxChangeData_title"> {dataBox.title} </p>
            
            <div className="boxChangeData_data" name = {dataBox.name}>
                {dataBox.name}
            </div>
        </div>
    )
}