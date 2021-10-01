export const CuentaApp = () =>{

    const handleButtonLogOut = ()=>{
        console.log('hola');
        fetch('/casas')
        .then(res=>res.json())
        .then((res)=>{
            console.log(res);
        })
        .catch((res)=>{
            console.log(res);
        })
    }
    

    return(
        // <h1>cuenta app</h1>
        <button onClick={handleButtonLogOut}> casas</button>
    )
}