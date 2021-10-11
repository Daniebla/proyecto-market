// const formidableController = require('../controllers/formidable-controller')
// const directoriosController = require('../controllers/directorios-controller')
// const verifyController = require('../controllers/verify-controller')
let movieModels = require('../models/movie-models.js'),
    jwtController = require('../controllers/jwt-controller'),
    formidableController = require('../controllers/formidable-controller'),
    directoriosController = require('../controllers/directorios-controller'),
    seguridadController = require('../controllers/seguridad-controller'),
    verifyController = require('../controllers/verify-controller'),
    nodemailer = require('../controllers/nodemailer-controller'),
    util = require('util')


let funcionesController = () => {}

funcionesController.identificarUsuario =  async (req,nameHeader)=>{
        
    let dataUserIn = await jwtController.desencriptarUser(req,nameHeader)

    // let util.inspect(dataUserIn)
    // console.log( util.inspect(dataUserIn));

    let dataCorreo = dataUserIn.data.email
    let dataContra = dataUserIn.data.PASSWORD
    let datosUserDb = await movieModels.getUser(dataCorreo,dataContra)
    let verificarDataUserDb = await verifyController.verificarDatosDb(datosUserDb,1,1)
    // console.log(util.inspect(verificarDataUserDb))
    
    return verificarDataUserDb
}

funcionesController.encriptarUsuario =  async (req)=>{
    let correo = req.body.correo
    let contra = req.body.contra
    
    let user =  await movieModels.getUser(correo, contra)
    let verificarDataUserDb = await verifyController.verificarDatosDb(user,1,1)
    let user_token = await jwtController.encriptarUser(user)
    return user_token
}


funcionesController.directoriosPesonal = async (req,idComponenteIn,idUsoIn) =>{

    let usuarioIdentificado = await funcionesController.identificarUsuario(req,'authorization')
    let dataUserIn = await jwtController.desencriptarUser(req,'authorization')
    // Obtiene todos los componentes de un usuario correspondiente a su grupo
    let directoriosComponentes = await movieModels.getDirectorioComponente(dataUserIn.data.id)
    let directoriosComponentesIsNull = await verifyController.isNull(directoriosComponentes)
    
    if(!idComponenteIn){
        // Obtiene los usos del primer componente 
        console.log('Obtener directorios all componentes y usos del primero (opcion 1): ')
        let directoriosUso = await movieModels.getDirectorioUso(directoriosComponentes[0].id)
        return {directoriosComponentes,directoriosUso}
    }else{
        // Verificar id componente
        let verifyid = await verifyController.verifyIsId(idComponenteIn)

        // En caso de que se quiera obtener los usos de un componente hablado
        console.log('Obtener directorios uso con componente especifico (opcion 2): ')
        let componenteHablado = await movieModels.getComponente(idComponenteIn)
        let estadoComponente = await seguridadController.compararDatos1N(componenteHablado,directoriosComponentes)
        console.log("resultado si se encontro componente dentro de los suyos"+util.inspect(estadoComponente))
        console.log("ID pasado por in: "+idComponenteIn)
        let directoriosUso = await movieModels.getDirectorioUso(idComponenteIn)
        console.log("usos obtenidos: "+util.inspect(directoriosUso))
        // En caso de que se quiera comprobar si el uso también corresponde a los datos de entrada
        if(idUsoIn){
            console.log('Obtener directorio componente y uso especifico (opcion 3): ')
            // Verificar id uso
            verifyid = await verifyController.verifyIsId(idUsoIn)
            let usoHablado = await movieModels.getUso(idUsoIn)
            let estadoUso = await seguridadController.compararDatos1N(usoHablado,directoriosUso)
            console.log("Estado de comparar uso hablado y existentes: "+estadoUso.estado)
            let data = {componenteHablado, usoHablado}
            return {componenteHablado, usoHablado}
        }
        else{
            return {directoriosUso}
        }


    }
}
// Subir archivo
funcionesController.getRutaPersonal = async (req,rutasComponenteUso)=>{
    // console.log("diositos")
    let fieldsSubir = {
        componente:undefined,
        idOpcionComponente: undefined,
        idOpcionUso: undefined}
    console.log("datitos:  "+rutasComponenteUso)
    /* Obtener los directorios a los que el usuario quiere guardar su archivo */
    console.log("rutas envíadas: "+rutasComponenteUso+"______________________")

    let comprobarCamposSubir  = await seguridadController.objectCompareAtributes(rutasComponenteUso, fieldsSubir)
    let verificarIdCampos = await verifyController.verifyIsId(rutasComponenteUso.idOpcionComponente)
        verificarIdCampos = await verifyController.verifyIsId(rutasComponenteUso.idOpcionUso)
    console.log("Verificar id: ______________")

    let getComponenteUsoDirectorioNames = await funcionesController.directoriosPesonal(req,rutasComponenteUso.idOpcionComponente,rutasComponenteUso.idOpcionUso)
    /* obtener names para envíar ruta y archivo para guardarlo*/
    let getComponenteUsoDirectorioNamesClean = await directoriosController.obtenerRutaUsuario(getComponenteUsoDirectorioNames)
    console.log("Se llego aqui espero que este todo bien :D")
    
    return getComponenteUsoDirectorioNamesClean
}

// Envíar correo electrónico
funcionesController.getUserByEmail = async(emailIn)=>{
    // TO DO VERIFICAR SI ES UN EMAIL
    let user = await movieModels.getUserByEmail(emailIn)
    let verificarDataUserDb = await verifyController.verificarDatosDb(user,1,1)
    console.log("Estado verificar datos db get user by emaili: "+util.inspect(verificarDataUserDb))
    
    return user[0]
}
funcionesController.sendEmail = async (emailDestino,urlRecuperar) =>{
    let statusSendEmail = await nodemailer.sendEmail(emailDestino,urlRecuperar)
    return statusSendEmail
}

funcionesController.getUser =  async (correo, contra)=>{
    let user =  await movieModels.getUser(correo, contra)
    let verificarDataUserDb = await verifyController.verificarDatosDb(user,1,1)
    return user[0]
}

// personal 
    // mis datos
    funcionesController.personal_MisDatos_data = async ()=>{
        
        // let getUser = await funcionesController.identificarUsuario()

        return 1
    }

module.exports = funcionesController