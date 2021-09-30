const formulario = document.getElementById('formArchivo')

const itemPadreSelectComponente = formulario.Componente
const itemPadreSelectUso = formulario.Uso


// Funciones
// Listo
const getUsuario = ()=>{
    jwtToken = localStorage.getItem("jwt")
    return jwtToken
}
const opcionesSetear = (opciones, padre) =>{
    const fragment = document.createDocumentFragment()
    
    let lista = opciones
    // Datos de entrada
    // console.log("Datos: ")
    // console.log(lista[0])
    // console.log("listita length: ")
    // console.log(lista.length)
    for (let i = 0; i< lista.length; i++){
        // console.log(lista[i].nameComponente )
        let option = document.createElement('option')
        option.setAttribute('value',lista[i].id)
        option.textContent = lista[i].name
        fragment.appendChild(option)
    }


    let opciones_size = padre.children.length
    for(let i = 0; i<opciones_size; i++) padre.removeChild(padre.children[0])
    if(lista.length != 0)
    padre.appendChild(fragment)
}

// POST Y GET
formulario.addEventListener("submit",(e)=>{
    e.preventDefault();

    idOpcionComponente = itemPadreSelectComponente.children[itemPadreSelectComponente.selectedIndex].value
    idOpcionUso = itemPadreSelectUso.children[itemPadreSelectUso.selectedIndex].value
    console.log(idOpcionComponente)
    console.log(idOpcionUso)

    console.log("Soy el formlario: ")
    // console.log(new FormData(formulario))

   let datosEntrada =  new FormData(formulario)
    datosEntrada.append("idOpcionComponente",idOpcionComponente)
    datosEntrada.append("idOpcionUso",idOpcionUso)

    console.log("obtener el campo componente: "+datosEntrada.get('componente'))
    let jwtToken = getUsuario()

    let datos={
        dato1:1
    }

    fetch('/getRutaPersonal',{
        method:'POST',
        body: datosEntrada,
        headers:{
            // Cuando se envía un form data nunca se envía contentype application json
            "authorization":jwtToken
        }
    })
    // .then(res=>res.json())
    .then(res=>res.json())
    .then(res=>console.log(res))
})


const obtenerDirectorios = async (idComponente)=>{

    console.log('hola')


    let jwtToken = getUsuario(),
        resCpy
    let datosDirectorio = {idComponente}
    await fetch('/directoriosPersonal',{
        method:'POST',
        body: JSON.stringify(datosDirectorio),
        headers:{
        "authorization":jwtToken,
        "content-type":"application/json"
        }
    })        
    // .then(res=>console.log("data input: "+JSON.stringify(res) ))
    .then(res=>{
        console.log("res then: "+res)
        resCpy = res

        return res.json()
    })
    .then(res=>{
        if(resCpy.status == 200){

            console.log('then: '+JSON.stringify(res))
            if(datosDirectorio.idComponente != undefined){
                opcionesSetear(res.directoriosUso, itemPadreSelectUso)
            }else{
                opcionesSetear(res.directoriosComponentes, itemPadreSelectComponente)
                opcionesSetear(res.directoriosUso, itemPadreSelectUso)
            }
        }else{
            console.log('aquí cambiamos de ruta')
            var url = "http://localhost:3000/login"
            location.assign(url)
            console.log(url.href)


        }
        
    })
    .catch(e=>{
        console.log('copia catch: '+resCpy)
        console.log('catch: '+e)
        // var url = document.createElement('a');
        // console.log(url.href)
    })

}



itemPadreSelectComponente.addEventListener('change',(e)=>{
    idComponente = itemPadreSelectComponente.children[itemPadreSelectComponente.selectedIndex].value
    console.log(idComponente)
    obtenerDirectorios(idComponente)

})

obtenerDirectorios()
