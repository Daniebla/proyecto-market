const nodemailer = require("nodemailer");
let util = require('util')

let nodemailerController = () => {}

nodemailerController.sendEmail= async(emailDestino,urlRecuperar)=>{
    console.log("url en nodemiler: \n"+urlRecuperar)
    let pasas = "as"
    return new Promise((resolve,reject)=>{
        var transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port:465,
            secure:true,
            auth: {
                user: 'angeldanielnieblalopez@gmail.com',
                pass: 'mhncyanegvuwehgy'
            }    
        })
    
        transporter.verify()
        .then(()=>{
            console.log("Ready for send emails")
        })
        .catch(()=>{
            console.log("Is not ready for sen emails")
        })

        let mailOptions = {
            from: 'angel daniel niebla lopez:1',
            to:emailDestino,
            subject:'Enviado desde nodemailer',
            // text:'Recuperación de contraseña de coca cola',
            html:`
            <p>Recuperación de contraseña de coca cola y apurate que caduca :)</p>
            <b>Please click on the following link, or paste this into your browser to complete the proces: </b>
            <a href=facebook.com?jwtrecovery=${urlRecuperar}>Recuperar</a>
            `
        }
    
        transporter.sendMail(mailOptions,(error,info)=>{
            if(error){
                console.log('Error nodemailer send: \n'+error)
                reject(error)        
            }else{
                console.log('nodemailer send: \n'+util.inspect(info))
                resolve(info)        
            }
        })

    })
}


module.exports = nodemailerController