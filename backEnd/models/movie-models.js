let movieConection = require('./movie-conection.js'),
    util = require('util'),
    nombreCamposBdConfig = require('../config/nombreCamposBdConfig.json' )


let movieModel = () => {}
 

// User
    movieModel.getUser = async (correo, contra)=>{
        return new Promise((resolve, reject)=>{
            movieConection.query(`SELECT * FROM persona WHERE ${nombreCamposBdConfig.persona.CORREO } = ? and ${nombreCamposBdConfig.persona.PASSWORD} = ?`,[correo,contra],(err, user)=>{
                if(err){
                    console.log("error obtenido: "+err)
                    reject(err)
                }else{
                    // console.log("usuario obtenido: "+ util.inspect(user))
                    resolve(user)
                }
            })
        })
        
    }

// Personal
    movieModel.personal_MisDatos_data = (correo, contra)=>{
        return new Promise((resolve, reject)=>{
                movieConection.query( `SELECT ${nombreCamposBdConfig.persona.USUARIO}, ${nombreCamposBdConfig.persona.CORREO}, ${nombreCamposBdConfig.persona.NOMBRECOMPLETO}, ${nombreCamposBdConfig.persona.NOMBREELEGIDO}, ${nombreCamposBdConfig.persona.DOCUMENTO}, ${nombreCamposBdConfig.persona.TELEFONO} FROM persona WHERE ${nombreCamposBdConfig.persona.CORREO} = ? and ${nombreCamposBdConfig.persona.PASSWORD} = ?`,[correo,contra],(err, user)=>{
                if(err){
                    console.log("error obtenido: "+err)
                    reject(err)
                }else{
                    // console.log("usuario obtenido: "+ util.inspect(user))
                    resolve(user)
                }
            })
        })
    }
// Get data
    movieModel.getData_Persona = (correo, contra, nombrePropiedades)=>{
        return new Promise((resolve, reject)=>{
                movieConection.query( `SELECT  ${nombrePropiedades} FROM persona WHERE ${nombreCamposBdConfig.persona.CORREO} = ? and ${nombreCamposBdConfig.persona.PASSWORD} = ?`,[correo,contra],(err, user)=>{
                if(err){
                    console.log("error obtenido: "+err)
                    reject(err)
                }else{
                    // console.log("usuario obtenido: "+ util.inspect(user))
                    resolve(user)
                }
            })
        })
    }






    movieModel.getUserByEmail = async (correo)=>{
        // console.log("movie-models: "+correo +"  "+ contra)
        return new Promise((resolve, reject)=>{
            movieConection.query('SELECT correo,contra FROM usuario WHERE email = ?',correo,(err, user)=>{
                if(err){
                    console.log("error obtenido: "+err)
                    reject(err)
                }else{
                    // console.log("usuario obtenido: "+ util.inspect(user[0]))
                    resolve(user)
                }
            })
        })
        
    }
    movieModel.setPassword = async (email,oldPassword, newPassword)=>{
        return new Promise((resolve, reject)=>{
            movieConection.query('update usuario set PASSWORD = ? where email = ? and PASSWORD = ?',[newPassword,email,oldPassword],(err, user)=>{
                if(err){
                    console.log("error obtenido: "+err)
                    reject(err)
                }else{
                    // console.log("usuario obtenido: "+ util.inspect(user[0]))
                    // console.log('datos despues de setear password: \n'+util.inspect(user))
                    resolve('Se modifico la contraseña')
                }
            })
        })
    }

    // directorios
    movieModel.getComponente = async (componente_id)=>{
        return new Promise((resolve, reject)=>{
            movieConection.query('SELECT * FROM componente WHERE id = ? ',componente_id,(err, user)=>{
                if(err){
                    reject(err)
                }else{
                    // console.log("Datos de consulta componente: "+util.inspect(user) )
                    // console.log("Datos de consulta componente: "+user[0].id )
                    resolve(user)
                }
            })
        })
        
    }
    movieModel.getUso = async (uso_id)=>{
        return new Promise((resolve, reject)=>{
            movieConection.query('SELECT * FROM uso WHERE id = ? ',uso_id,(err, user)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(user)
                }
            })
        })
        
    }

    movieModel.getDirectorioComponente = (user_id)=>{
        return new Promise ((resolve, reject)=>{
            movieConection.query('SELECT componente.id, componente.name from usuario join opcionescomponentes_usuario on opcionescomponentes_usuario.fk_IDusuario = usuario.id JOIN opcionescomponentes on opcionescomponentes.id = opcionescomponentes_usuario.fk_IDopcionesComponente join componente_opcionescomponente on componente_opcionescomponente.fk_IDopcionesComponente = opcionescomponentes.id join componente on componente.id = componente_opcionescomponente.fk_IDcomponete where usuario.id = ? ',user_id,
            (err, data)=>{
              if(err) reject(err)
              else
              resolve(data)  
            })

        })
    }
    movieModel.getDirectorioUso = (componente_id)=>{
        return new Promise ((resolve, reject)=>{
            movieConection.query('SELECT uso.id, uso.name FROM componente JOIN uso on uso.fk_idComponente = componente.id WHERE componente.id = ?',
            componente_id,
            (err, data)=>{
              if(err) reject(err)
              else
              resolve(data)  
            })

        })
    }


    movieModel.getDirectorioUso1 = (componente_id)=>{
        return new Promise ((resolve, reject)=>{
            movieConection.query('SELECT uso.id, uso.name FROM componente JOIN uso on uso.fk_idComponente = componente.id WHERE componente.id = ?',
            componente_id,                                      
            (err, data)=>{
                if(!isNaN(componente_id))
                console.log("Componente id es un numero: "+componente_id)
                else
                console.log("Componente id no un numero: "+componente_id)

                console.log("Mostrar query: "+data)

              if(err) reject(err)
              else
              resolve(data)  
            })

        })
    }
 



module.exports = movieModel

