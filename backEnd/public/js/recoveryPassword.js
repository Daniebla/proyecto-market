let newPassword = document.getElementById('form_NewContra'),
    repeatNewPassword = document.getElementById('form_verifyContra'),
    form_recuperarPassword = document.getElementById('form_recuperarPassword')
    
// Obtener parametros de url
let valores = window.location.search,
    urlParams = new URLSearchParams(valores),
    jwtRecuperarContra = urlParams.get('jwtrecovery')

jwtRecuperarContra = `barer ${jwtRecuperarContra}`


form_recuperarPassword.addEventListener('submit',(e)=>{
    e.preventDefault()
    let newPasswordValue = newPassword.value
    let repeatNewPasswordValue = repeatNewPassword.value
    let nameHeader = 'recoveryuserjwt'
    let dataIn = {
        nameHeader,
        newPasswordValue,
        repeatNewPasswordValue
    }
    recuperPassword(jwtRecuperarContra,dataIn)
})


let recuperPassword = async(jwtRecuperarContra,dataIn)=>{
    console.log('Nuevas contras: '+JSON.stringify(dataIn) )
    await fetch('/recoveryUser/newpassword',{
        method:'POST',
        body: JSON.stringify(dataIn),
        headers:{
            "content-type":"application/json",
            "recoveryUserJWT":jwtRecuperarContra
        }
    })
    .then(res=>res.json())
    .then(res=>{
        console.log(res)
    })

}