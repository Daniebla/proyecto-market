let formidable = require('formidable'),
    fse = require('fs-extra'),
	funcionesController = require('../controllers/funciones-controller'),
	directoriosController = require('./directorios-controller'),
	util = require('util')

    
let formidableController = () => {}
	formidableController.subirArchivo = (req)=>{
		console.log("que paso aqui")
		return new Promise((resolve, reject)=>{
		let fieldss

			let form = formidable() 
			form
				.parse(req, function (err, fields, files){
					// res.writeHead(200, {'Content-Type' : 'text/html'})
					// res.write(`
					// 	<h1>Archivos Recibidos</h1>
					// 	<a href="/">regresar</a>
					// 	<br><br>
					// 	<code>${util.inspect( {files : files} )}</code>
					// `)
					// console.log(util.inspect( {fields : fields} ))
				
					console.log("formidable fields files")
					fieldss =  {fields : fields} 
				
					console.log("Contenido fields: "+util.inspect(fieldss))

					// console.log("El original: "+fieldss.fields.componente)



					// resolve('Todo bien formidable')
				
				
				})
				.on('progress', function (bytesReceived, bytesExpected){
					let percentCompleted = ( bytesReceived / bytesExpected ) * 100
					console.log(percentCompleted.toFixed(2))
				})
				.on('error', function (err){
					let locals = {
						title: 'Error al transferir datos',
						description: 'error formulario',
						error: err
					}
					reject('catch error formidable')
					// res.render('error', locals)
					console.log(err)
				})
				.on('end', function (fields, files){
					const funcionGetRuta = async (req,campos)=>{
						let getRuta = await funcionesController.getRutaPersonal(req,campos)
						return getRuta
					}
					console.log("Contenido fields: "+fieldss.fields)
					funcionGetRuta(req,fieldss.fields)
					.then(response =>{
						let ruta = response,
							locationDirectorio = `${__dirname}../../datosUsuario/${ruta}`
							// crear directorio
							directoriosController.crearRuta(locationDirectorio)

						/* MURO DE CONTENCION */
						for(let i in this.openedFiles){
							console.log(`Archivo ${i}`)
						}
						console.log("Cantidad de archivos: "+this.openedFiles.length)
						for(let i in this.openedFiles){
							//Ubicación temporal del archivo que se sube
							let tempPath = this.openedFiles[i].path,
							// El nombre del archivo subido
								fileName = this.openedFiles[i].name,
							// Nueva ubicación
								location = `${locationDirectorio}/${fileName}`
							console.log(`location : ${location}`)
							// newLocation = './upload/' + fileName
		
							fse.copy(tempPath, location, function (err){
							return (err) ? console.log(err) : console.log('El archivo  se subió con éxito :)')
							})
							
						}
						resolve("Se guardo el archivo correctamente")
					})
					.catch(response=>{
						console.log(response)
					})
					// //Ubicación temporal del archivo que se sube
					// let tempPath = this.openedFiles[0].path,
					// 	// El nombre del archivo subido
					// 	fileName = this.openedFiles[0].name,
					// 	// Nueva ubicación
					// 	newLocation = './upload/' + fileName
	
					// fse.copy(tempPath, newLocation, function (err){
					// 	return (err) ? console.log(err) : console.log('El archivo  se subió con éxito :)')
					// })
				})
	
			return
		})
	}

	formidableController.getFieldsFormdata = async (req,res,err) =>{
		return new Promise((resolve, reject)=>{
			let fieldss
			let form = formidable() 
			form
					.parse(req, function (err, fields, files){
						console.log("formidable parse (fields files) ")
						fieldss =  {fields : fields} 
						// resolve(fieldss)
					})
					.on('error', function (err){
						let locals = {
							title: 'Error al transferir datos',
							description: 'error formulario',
							error: err
						}
						reject('catch error formidable directorios fields')
						console.log(err)
					})
					.on('end', function (fields, files){
						
						console.log("formidable fields  end")
						console.log(fieldss.fields)
						resolve(fieldss.fields)
					})
	
					
			return
		})
	
	}


module.exports = formidableController