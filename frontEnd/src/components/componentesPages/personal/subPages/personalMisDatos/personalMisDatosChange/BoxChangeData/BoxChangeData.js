import { TextBoxFormApp } from '../../../../../../textBoxForm/TextBoxFormApp'
import { TitleBoxFormApp } from '../../../../../../titleBoxForm/TitleBoxFormApp'
import './boxChangeData.scss'

export const BoxChangeData = ({dataBox, form, handleChange}) =>{

    return(
        <div className="boxChangeData">
             <TitleBoxFormApp title = {dataBox.title}/>
             <TextBoxFormApp form = {form} name = {dataBox.name} handleChange={handleChange} validationForm={dataBox.validationForm}/>
        </div>
    )
}