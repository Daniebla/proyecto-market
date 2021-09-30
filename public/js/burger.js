let mainMenu = document.getElementById('main-menu'),
    mainMenu__float = document.getElementById('main-menu__float'),
    scripts = document.getElementById('scripts'),
    head = document.getElementById('head'),
    vista = document.getElementById('vista'),
    opcionActual, 
    cantidadJsBase=1,
    listaRecursosJs = []

    
mainMenu__float.addEventListener('click',(e)=>{
    mainMenu.classList.toggle('main-menu__active')
    mainMenu__float.classList.toggle('main-menu__float__active')
})

mainMenu.addEventListener("click",e=>{
    let attributeName = e.target.getAttribute('name')
    if( attributeName != undefined){
        // observar cambios
        mainMenu.classList.toggle('main-menu__active')
        mainMenu__float.classList.toggle('main-menu__float__active')
    
        // Obtener html 
        if(opcionActual != attributeName){

            // Obtener html
            fetch(`/${attributeName}`)
            .then(e=>e.json())
            .then(e=>{
                // declarar variables
                let fragmentContent = document.createDocumentFragment(),
                    contentHTML = document.createElement('section')
                contentHTML.classList.add('bodySelect') 
                contentHTML.innerHTML = e
                fragmentContent.appendChild(contentHTML)    

                //Liberar espacio de html
                console.log("pasas: "+vista.children)
                for(let hijo of vista.children){
                        if(hijo.classList.contains('bodySelect')){
                            // console.log('remover')
                            hijo.remove()
                        }
                }
                // append to html
                vista.appendChild(fragmentContent)
                opcionActual = attributeName 
            })
            .catch(e=>console.log(e))
            // console.log('hol')



        }else{
            console.log("Ya se esta en la opcion seleccionada")
        }
            
        // console.log(vista)
        

        // sistema para obtener archivos javascript a como se necesiten de forma que no se repitan

        let bandLinkJs = 'v'
        console.log("name atribute: "+attributeName +'\n'+"lista de recursos js: "+listaRecursosJs)
            // JS
            for(let recurso of listaRecursosJs){
                console.log("JS")
                if(attributeName == recurso){
                    bandLinkJs = 'f'
                    console.log('recurso JS ya obtenido: '+ attributeName)
                    break
                }
            }
        console.log("Peras");
        // Obtener link JS
        if(bandLinkJs == 'v'){
            console.log("recurso no obtenido, obtener ahora");

            // declarar variables
            let fragmentScript = document.createDocumentFragment(),
                elementScript = document.createElement('script')
                // Obtener JS
                // elementScript.setAttribute('rel','stylesheet')
                elementScript.setAttribute('src',`static/js/${attributeName}.js`)
                elementScript.setAttribute('name',`${attributeName}`)
                listaRecursosJs.push(attributeName)
                fragmentScript.append(elementScript)
                scripts.appendChild(fragmentScript)
        }

    }else{
        console.log('undefined attribute')
    }

})
