'use strict'

let middlewares = require('./controllers/middlewares/middlewares'),
	path = require('path'),
	express = require('express'),
	favicon = require('serve-favicon'),
	bodyParser = require('body-parser'),
	morgan = require('morgan'),
	// restFul = require('express-method-override')('_method'),
	faviconURL = `${__dirname}/public/img/node-favicon.png`,
	routes = require('./routes/movie-router'),
	publicDir = express.static(`${__dirname}/public`),
	viewDir = `${__dirname}/views/pages`,
	port = (process.env.PORT || 3000),
	app = express(),
	cors = require('cors')

app
	//configurando app
	.set('views', viewDir)
	.set('view engine', 'pug')
	.set('port', port)
	//ejecutando middlewares
	.use(bodyParser.json())
	.use(cors({origin:['http://localhost:3001']}))

	// .use(restFul)
	
	// .get('/', logStuff, function (req, res, next) {
		// 	console.log('User Info')
		// 	next()
		//   })
		
		// .use('/login',(req,res,next)=>{
			// 	console.log('este es para login\n',req.method)
			// 	next()
			// })
	// console.log(232)

	.use( favicon(faviconURL) )
	.use(bodyParser.urlencoded({extended : false}))
	.use( morgan('dev') )
	.use('/static', publicDir)
	.use(express.static(path.join(__dirname, 'frontEnd','build')))
	.use(middlewares.verifyIsLogin)
	//ejecuto el middleware Enrutador
	.use('/',routes)

	// prueba dos de git
	module.exports = app