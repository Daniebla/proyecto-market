import './textBoxForm.scss'

export const TextBoxFormApp = ({form, name, handleChange}) =>{
 
    return(
        <input 
            type ="text" 
            className ="textBoxForm" 
            name = {name} 
            value = { typeof form[name] !== 'undefined' ? form[name] : '...' }
            onChange = {handleChange} 
        />

    )
}