import React, { useState, useEffect } from 'react';


export const BotonApp = ({typeBotton,textBotton, sizeBottonCase,sizeBottonExact, typeInput}) =>{

    const myStylesInitial = {
        display: 'flex',
        alignItems: "center",
        justifyContent:"center",
        border: "none"
    }

    
    const [myStyles, setMyStyles] = useState(myStylesInitial)
    const [errorr, setError] = useState(false)

    
    
    const listChangeMyStyles = (list) => {

        setMyStyles({
            ...myStyles,
            ...list
        })
    }

    // Hacer helper
    const combineObjects = (primaryObject,secundaryObject) =>{

        primaryObject = {
            ...primaryObject,
            ...secundaryObject
        }

        return primaryObject
    }

    useEffect(()=>{

        let newListStyles = {}, listStyles = {}

        // Propiedades tomadas por el tipo de boton
        switch (typeBotton) {
            case 'cancelar':
                listStyles = { 
                    backgroundColor :"red"                    
                }
                
                newListStyles = combineObjects(newListStyles,listStyles)
                break;
        
            case 'enviar':
                 listStyles = { 
                    backgroundColor :"green"                    
                }
                
                newListStyles = combineObjects(newListStyles,listStyles)

                break;

            default:
                console.error("no coincide el tipo de boton, "+typeBotton);
                setError(true)
            break
        }

        // Prpiedades del tamanio de la caja
        if(sizeBottonExact){
            console.error("caso no controlado: se envia información que no sabe como tratarla, 'sizeBottonExact'")
        }else{
            switch (sizeBottonCase) {
                case 'form':
                     listStyles = { 
                        minWidth:"50px",
                        minHeight:"30px",
                        maxWidth:"100px",
                        maxHeight:"35px",
                        width:'26vw',
                        height: '13vh'
                    }

                    newListStyles = combineObjects(newListStyles,listStyles)
                    break;
            
                default:
                    console.error("no coincide el tamaño de boton, "+sizeBottonCase);
                    setError(true)
                break;
            }
        }


        listChangeMyStyles(newListStyles)

    },[])
    



    return(
        <>
            {!errorr? 
                <input type ={typeInput} style={myStyles}  defaultValue={textBotton}/> 
                : 
                null }
        </>
        
    )
            
}
BotonApp.defaultProps = {
    typeInput : 'button',
    typeBotton: null,
    textBotton: '', 
    sizeBottonCase: null,
    sizeBottonExact: null,
}
