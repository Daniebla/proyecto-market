const objectCompareModule = require('object-compare');
let seguridadController = () => {}
    
// comprueba si un objeto es igual a otro (debería de ser anticuado)
seguridadController.compararDatos = (in_data,db_data)=>{
        return new Promise((resolve, reject)=>{
            let jsonRespuesta = {
                estado:3,
                mensaje:""
            }
            if( db_data != ''){
                jsonRespuesta.estado = 1            
                jsonRespuesta.mensaje = "Información verificada"
                // console.log("datos de comparar: ")
                // console.log(db_data)
                for( let propiedad in db_data){
                    if(in_data[propiedad] != db_data[propiedad]){
                        jsonRespuesta.estado = 2
                        jsonRespuesta.mensaje = "la información no coincide "
                        reject(jsonRespuesta)
                    }
                }
                resolve(jsonRespuesta)

            }else{
                console.log('Usuario no existe o no encontrado')
                jsonRespuesta.estado = 3
                jsonRespuesta.mensaje = "Usuario no existe o no encontrado"
                reject(jsonRespuesta)
            } 


        })
    }

// Se usa para comprobar si un objeto con sus propiedades superficiales es igual entre una lista
seguridadController.compararDatos1N = (in_data,db_data)=>{
        // Datos de entrada
        // console.log("Datos para verificar igualdad 1N ")
        // console.log(db_data)
        // console.log(in_data)

        return new Promise((resolve, reject)=>{
            let jsonRespuesta = {
                estado:3,
                mensaje:""
            }
            // if(in_data != ''){
            //     console.log('in data Usuario no existe o no encontrado')
            //     jsonRespuesta.estado = 3
            //     jsonRespuesta.mensaje = "in data Usuario no existe o no encontrado"
            //     reject(jsonRespuesta)
            // }
            if( db_data != ''){
                let band
                for( let i in db_data){
                    // console.log(`seguridad iterador pos: ${i}`)
                    // console.log('_____________________________')
                    // console.log(in_data[0])
                    // console.log(db_data[i])
                    // console.log('_____________________________')
                    let in_dataCpy = in_data[0]
                    let db_dataCpy = db_data[i]
                    let band ='v'
                    for( let propiedad in db_dataCpy){
                        
                        if(in_dataCpy[propiedad] != db_dataCpy[propiedad]){
                            // console.log('_______________|Contenido|___________')
                            // console.log(in_dataCpy[propiedad])
                            // console.log(db_dataCpy[propiedad])
                            // console.log('_______________°Contenido°___________')
                            band ='f'
                        }
                    }
                    if(band=='v'){
                        jsonRespuesta.estado = 1            
                        jsonRespuesta.mensaje = "Información verificada directorios"
                        // console.log("datos de comparar 1N coincide:) ")        
                        resolve(jsonRespuesta)
                        break;
                    }
                    
                }
                if(band == 'f'){
                    jsonRespuesta.estado = 2
                    jsonRespuesta.mensaje = "la información no coincide directorios"
                    // console.log("No entre aquí 1N vato :)")
                    reject(jsonRespuesta)

                }
    
            }else{
                console.log('Usuario no existe o no encontrado')
                jsonRespuesta.estado = 3
                jsonRespuesta.mensaje = "Usuario no existe o no encontrado directorios"
                reject(jsonRespuesta)
            } 
    
    
        })
    }

// Compara si dos objetos son identidos, los atributos deben de estár en la misma posición pero cada arreglo puede ser indistinto de su posición dentro
seguridadController.objectCompare = (in_object,db_object)=>{
   return new Promise((resolve, reject)=>{
        if(objectCompareModule(in_object,db_object)){
            resolve("Los objetos son los mismos")
        }else{
            reject("Los objetos no es lo mismo")
        }
    })
}

// Compara atributos de un objeto o array(puede ser)
seguridadController.objectCompareAtributes = (in_object,db_object) =>{
    
    const objectCompare = (obj1, obj2) => {
        //if both objects are numbers or strings or booleans, compare them directly with ===
        if (
        (typeof(obj1) === 'number' || typeof(obj1) === 'string' || typeof(obj1) === 'boolean') 
        &&
        (typeof(obj2) === 'undefined')
        // 
        ) {
            return true
        // if (!(obj1===obj2))
        //   return false;
        // return true;
        }
    
        if (obj1.constructor === Object && obj2.constructor === Object) {
        //case 2 they are objects
        //in this case
        let keys1 = Object.keys(obj1);
        let keys2 = Object.keys(obj2);
    
        //if they have a different number of keys they are definetly different
        if (keys1.length != keys2.length)
            return false;
    
        //if the second object doesn't have all the keys the first one does -> !=
        let i;
        for (i = 0; i < keys1.length; ++i)
            if (!(obj2.hasOwnProperty(keys1[i]))) return false;
    
        //they have the same keys, so compare their keys's objects one by one
        for (i = 0; i < keys1.length; ++i)
            if (!objectCompare(obj1[keys1[i]], obj2[keys1[i]])) return false;
    
        //if theiy keys's objects are the same, return true
        return true;
        }
    
        if (obj1.constructor === Array
        &&obj2.constructor === Array) {
            //if they don't have the same length, smth is wrong
            if (obj1.length != obj2.length) return false;
    
            //if the first array has all the elements found in the second one and vice versa they are the same (although the complexity of the algorythm is kinda big)
            let foundIn1 = 0, foundIn2 = 0;
            let i, j;
            for (i = 0; i < obj1.length; ++i)
            for (j = 0; j < obj2.length; ++j)
                if (objectCompare(obj1[i], obj2[j])) {
                ++foundIn2;
                break;
                }
    
            for (j = 0; j < obj2.length; ++j)
            for (i = 0; i < obj1.length; ++i)
                if (objectCompare(obj2[j], obj1[i])) {
                ++foundIn1;
                break;
                }
    
            if (foundIn1 === foundIn2 && foundIn1 === obj1.length)
            return true;
        }
        return false;
    };
      
    return new Promise((resolve, reject)=>{
        if(objectCompare(in_object,db_object)){
            resolve("Los atributos coinciden compare atributes")
        }else{
            reject("Los atributos no coinciden compare atributes")
        }
    })

}

seguridadController.pruebita = (data) =>{

    return new Promise((resolve, reject)=>{
        if(0){
            console.log("no debe de verse este resolve")
            resolve("no debe de verse este resolve")
        }else{
            console.log("no debe de verse este reject")
            reject("no debe de verse este reject")
        }
    })
    
}

module.exports = seguridadController