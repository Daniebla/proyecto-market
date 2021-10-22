import { TextBoxFormApp } from '../../../../../../textBoxForm/TextBoxFormApp'
import { TitleBoxFormApp } from '../../../../../../titleBoxForm/TitleBoxFormApp'
import './boxChangeData.scss'

export const BoxChangeData = ({dataBox, form, handleChange}) =>{

    return(
        <div className="boxChangeData">
            {/* <p className="boxChangeData_title"> {dataBox.title} </p> */}

             {/* <div className="boxChangeData_data" name = {dataBox.name}>
                 {dataBox.name}
             </div>  */}

             <TitleBoxFormApp title = {dataBox.title}/>
             <TextBoxFormApp form = {form} name = {dataBox.name} handleChange={handleChange}/>
        </div>
    )
}