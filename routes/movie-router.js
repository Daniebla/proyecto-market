'use strict'

var path = require('path'),
	express = require('express'),
	movieController = require ('../controllers/movie-controller'),
	router = express.Router()

	let objeto = {casa: "casa"}

router
	/* ************************************************************************************************************************************* */
	//Personal 
	.post('/personal/misdatos',movieController.personal_MisDatos_data)

	.get('/casas',(req,res)=>{
		res.json(objeto)
		console.log("hola")
	})
	.get('/*',function(req,res){
		console.log("j")
		res.sendFile(path.join(__dirname, '../frontEnd','build', "index.html"))
	})

	/* ************************************************************************************************************************************* */
	


/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
// // Pagina inicio
	// .get('/',movieController.inicio)
// // Iniciar sesión
	.get("/login",movieController.login)
// // INICIAR SESION
	.post("/api/loginPost",movieController.loginPost)
	.post("/api/verify",movieController.verifyUser)
	// crear una nueva contraseña
	.get('/recuperarcontra',movieController.recuperarContraRedirect)
	.get('/recovery',movieController.recoveryUserRedirect)
	.post('/recoveryUser/sendemail',movieController.recoveryUserSendEmail)
	.post('/recoveryUser/newpassword',movieController.recoveryUserNewPassword)

// // Personal
	// .get('/personal',movieController.personalRedirect)
	.get('/subirLugar',movieController.subir)
	.get('/cuenta',movieController.cuenta)
	.post("/directoriosPersonal",movieController.directoriosPesonal)
	.post("/getRutaPersonal",movieController.getRutaPersonal)

/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

	
module.exports = router