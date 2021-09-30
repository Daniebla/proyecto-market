const fs = require('fs'),
        util = require('util');
const fsPromises = fs.promises;

let directoriosController = () => {}

directoriosController.crearRuta=(ruta)=>{
    return new Promise((resolve, reject)=>{
            fsPromises.mkdir(ruta,{recursive: true})
            .then(resolve)
            .catch(reject)
        

    })

}


directoriosController.obtenerRutaUsuario=(rutasObject)=>{
    return new Promise((resolve, reject)=>{
        // console.log("Las rutas: "+ util.inspect(rutasObject))
        // console.log("Las ruta :# : "+ util.inspect(rutasObject.componenteHablado[0].name))
        // console.log("Las ruta :# : "+ util.inspect(rutasObject.usoHablado[0].name))
        let nombreDirectorioComponente = rutasObject.componenteHablado[0].name
        let nombreDirectorioUso = rutasObject.usoHablado[0].name
        let ruta = `${nombreDirectorioComponente}/${nombreDirectorioUso}`
        if(nombreDirectorioComponente != undefined && nombreDirectorioUso != undefined){
            resolve(ruta)
        }else{

            reject('Error en unir ruta')
        }

    })

}

module.exports = directoriosController