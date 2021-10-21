import { BoxChangeData } from "../BoxChangeData/BoxChangeData";
import { DebeCumplir } from "../debeCumplir/DebeCumplirApp"



export const ChangeDataApp = ( {titlee, initialData}) =>{

    // console.log(initialData);

    return(
        <>
            <DebeCumplir initialData = {initialData.debeCumplir}/>

            {initialData.isTextForm && 
                initialData.textForms.map((dataBox,index)=>(
                    <BoxChangeData dataBox = {dataBox} key = {index} />   
                ))
            }
        </>
    )
}