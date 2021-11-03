import './debeCumplir.scss'
export const DebeCumplir = ({initialData}) =>{

    return(
        
        <ul className ="DebeCumplir">
            {initialData.length > 0 && initialData.map((data, index)=> (
                <li key={index}>{1}</li>
            )) }    
        </ul>
    )
}