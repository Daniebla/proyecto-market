let util = require('util')
let verifyController = () => {}


verifyController.verifyIsId=(id)=>{
    return new Promise((resolve,reject)=>{
        resolve('todo bien creee encerio verify controller id')
    })
}

verifyController.isNull=(data)=>{
    return new Promise((resolve,reject)=>{
        resolve('todo bien creeeme encerio verify controller data')
    })
}

verifyController.verificarDatosDb = (data,opcion,cantidad)=>{
    // console.log("datos verifiDatosDb: "+util.inspect(data))
    // console.log("Length: "+data.length)
    return new Promise((resolve, reject)=>{
        switch(opcion){
            case 1:
                if(data.length == cantidad){
                    console.log("datos obtenidos"+ data.length)
                    resolve(`Cantidad de datos como los esperados: ${cantidad}`)
                }else{
                    console.log("datos obtenidos"+ data.length)
                    reject(`No se ingresaron la cantidad de datos esperados: ${cantidad}`)
                }
                break
            case 2:
                if(data.lenght != cantidad){
                    resolve(`Cantidad de datos distintos al dado:  ${cantidad}`)
                }else{
                    reject(`Cantidad de datos obtenida y no esperada: ${cantidad}`)
                }
                
            default:
                reject('No se ingreso una opcion')
        }
    })
}

// verifyController.madeObject=(objeto)=>{
//     let newObjeto = {
//          : objeto.componenteHablado,
//         objeto
//     }
// }
module.exports = verifyController
