const { Console } = require('console')
let movieModels = require('../models/movie-models.js'),
    formidableController = require('../controllers/formidable-controller'),
    DirectoriosController = require('../controllers/directorios-controller'),
    jwtController = require('../controllers/jwt-controller'),
    funcionesController = require('../controllers/funciones-controller'),
    seguridadController = require('../controllers/seguridad-controller'),
    verifyController = require('../controllers/verify-controller'),
    util = require('util'),
    fetch = require('node-fetch'),
    pug = require('pug')

// NUEBA ERA


let movieController = () => {}

// render paginas
    movieController.login=(req,res,next)=>res.render('static/login')
    movieController.recoveryUserRedirect=(req,res)=>res.render('login/recovery')
    movieController.recuperarContraRedirect = async (req,res)=>res.render('login/recoveryPassword')
    // index
    // movieController.inicio=(req,res,next)=> res.render('static/index')   
    // personal
    // movieController.personalRedirect=(req,res,next)=> res.render('static/personal') 
    movieController.subir= async (req,res,next)=>{
        var html = pug.renderFile(`${__dirname}/../views/pages/personal/subirDirectorio.pug`)
        res.json(html)}
    movieController.cuenta=(req,res)=>{
        var html = pug.renderFile(`${__dirname}/../views/pages/personal/cuenta.pug`)
        res.json(html)
    }

// JWT
movieController.loginPost= async(req,res)=> {
    const obtenerLlaveUser = async(correo,contra) => {
        let user = await funcionesController.getUser(correo,contra)
        let user_token = await jwtController.encriptarUser(user)
        return user_token
    }
    console.log("data req: "+req.body.correo);
    console.log("data req: "+req.body.contra);

    let correo = req.body.correo
    let contra = req.body.contra
    await obtenerLlaveUser(correo,contra)
        .then(response =>{
            console.log("ea qui la respuesta: "+response)
            res.json(response)

        })
        .catch(response =>{

            console.log("Error login: "+response)
            res.sendStatus(406)
            // res.json(response)

        })
}
movieController.verifyUser=(req , res) => {

    funcionesController.identificarUsuario(req,'authorization')
    .then( resposne=>res.status(200).json(resposne))
    .catch(response =>{
        console.log("verifyUser catch: "+response)
        res.status(400).json(response)
    })       
}
// Recuperar contra
movieController.recoveryUserSendEmail= async (req,res)=>{
    // console.log("body de recovery: "+req.body.correo)
    const recoveryUserProceso = async () =>{
        let correoIn = await req.body.correo
        let user = await funcionesController.getUserByEmail(correoIn) 
        let userTokenExpire = await jwtController.encriptarDataExpire(user)
        // console.log("token expire: \n"+userTokenExpire)
        // let statusSendEmail = await funcionesController.sendEmail(correoIn,userTokenExpire)
        return userTokenExpire
    }
    await recoveryUserProceso()
    .then(data => {
        res.json(`localhost:3000/recuperarcontra?jwtrecovery=${data}`)
        // res.json(data)
    })
    .catch(data => console.log("catch recoveryUserSendEmail: \n"+data) )
}

movieController.recoveryUserNewPassword = async (req,res)=>{
    // console.log(util.inspect(req.body))
    // let bearerHeader =  req.headers['recoveryuserjwt']
    const recoveryUserNewPassword = async (req) =>{
        // variables
        let dataInPlantilla ={
            nameHeader:undefined,
            newPasswordValue:undefined,
            repeatNewPasswordValue:undefined
        }

        
        let dataIn = req.body
        console.log("Data in recoveryUserNewPassword: "+util.inspect(dataIn))

        // verificar datos de entrafa falta verificar el contenido de cada variable
        let comprobarAtributos = await seguridadController.objectCompareAtributes(dataIn,dataInPlantilla)
        // Verificar y obtener el usuario en el token
        let verifyUser = await funcionesController.identificarUsuario(req,dataIn.nameHeader)
        let userIn = await jwtController.desencriptarUser(req,dataIn.nameHeader)
        console.log("Data user: \n"+util.inspect(userIn))
        // comprobar password
        let verifySame = await seguridadController.objectCompare(dataIn.newPasswordValue, dataIn.repeatNewPasswordValue) 
        let cambiarContraUsuario = await movieModels.setPassword(userIn.data.correo,userIn.data.contra,dataIn.newPasswordValue)

        return cambiarContraUsuario
    }
    recoveryUserNewPassword(req)
    .then(response => res.json(response))
    .catch(resposne => console.log("Catch recoveryUserNewPassword: \n"+resposne))
    
}

// subir archvo con ruta
movieController.getRutaPersonal = (req,res,next) => {
    console.log("empieza subir archivo movieController:________________________________________ ")
    // formidableController.getFieldsFormdata(req)
    // .then(response => {
    //     console.log(response)
    // })    
    // .catch(response => {
    //     console.log(response)
    // })
    
    formidableController.subirArchivo(req)
        .then(response =>{
            console.log("then subir archivo: ")
            console.log(response)
            res.json(response)
        })
        .catch(response =>{
            console.log("catch subir archivo: ")
            console.log(response)
        })
    
    }
// Directorios
movieController.directoriosPesonal =  (req, res, next)=>{
    // console.log("el id del componente es: ")
    // console.log(req.body.idComponente)
    funcionesController.directoriosPesonal(req,req.body.idComponente)
    .then(response =>{
        console.log("then directorio: ")
        // console.log(response)
        res.json(response)
    })
    .catch(response =>{
        console.log("catch directorio: ")
        // res.redirect(200,'/')
        console.log(response)
        let  numResolveError = response.numResolveError
        res
            .status(400)
            .json({
                numResolveError
            })
    })
}

// personal 
    // mis datos
movieController.personal_MisDatos_data = async (req, res)=>{
    // console.log(req.headers['authorization'])
    const personal_MisDatos_data = async (req) =>{
        
        let identificarUsuario = await funcionesController.identificarUsuario(req,'authorization')
        let userKeys = await jwtController.desencriptarUser(req,'authorization')
        let correo = userKeys.data.email
        let contra = userKeys.data.PASSWORD
        let misDatos_data = await movieModels.personal_MisDatos_data(correo, contra)
        

        
        return misDatos_data
    }
    personal_MisDatos_data(req)
    .then((response)=>{
        console.log(222);
        console.log(response);
        res.json(response[0])

    })
    .catch((response)=>{
        console.log(111);
        console.log(response);
        res.json(response[0])

    })




}


























// VIEJO CREO

// movieController.error404=(req, res, next)=>{
//         let error =  new Error (),
// 		locals = {
// 			title : 'Error 404',
// 			description : 'Recurso No Encontrado',
// 			error : error
// 		}

// 	error.status = 404

// 	res.render('error', locals)

// 	next()
//     } 

module.exports = movieController




