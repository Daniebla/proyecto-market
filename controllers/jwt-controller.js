let    jwt = require("jsonwebtoken")

let jwtController = () => {}

    jwtController.encriptarUser= async (data) => { 

        return new Promise((resolve, reject)=>{
        
            jwt.sign({data}, 'secretkey',  (err, token) => {
                // console.log(token)
                
                if(err){
                    reject(err)
                }else{
                    // console.log("el token es: "+token)
                    resolve(token)
                }        
            });
        })
            
    }

    jwtController.encriptarDataExpire= async (data) => { 

        return new Promise((resolve, reject)=>{
        
            jwt.sign({data}, 'secretkey', {expiresIn:"600000"}, (err, token) => {
                // console.log(token)
                
                if(err){
                    reject(err)
                }else{
                    // console.log("el token es: "+token)
                    resolve(token)
                }        
            });
        })
            
    }

    jwtController.desencriptarUser=(req,nameHeader) => {

        // console.log(req.headers)
        return new Promise((resolve, reject)=>{
            // console.log(req.headers['authorization'])
            let bearerHeader =  req.headers[nameHeader];
            if(typeof bearerHeader !== 'undefined'){
                bearerHeader = bearerHeader.split(" ")[1];
               
               jwt.verify(bearerHeader, 'secretkey', (error, authData) => {
                   if(error){
                       reject({
                                message:'no se pudo desencriptar por el error: \n'+error
                                ,numResolveError: 1
                            })
                   }else{
                       // res.json({
                       //         mensaje: "Post fue creado",
                       //         authData
                       //     });
                        resolve(authData)
                   }
               });
 
          }else{
            reject({
                message:'no se encontro el token: \n'+error
                ,numResolveError: 1
            })
          }
        })
    }


module.exports = jwtController
