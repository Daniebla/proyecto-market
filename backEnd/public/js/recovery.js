let form = document.getElementById('form-verify'), 
form_correo = document.getElementById('form_correo')
console.log(form)
console.log(form_correo.value)



form.addEventListener('submit',e=>{
    e.preventDefault()
    console.log("hola")
    recuperarUsuario()

})

const recuperarUsuario = async ()=>{

    let form_correo_value = {correo: form_correo.value}
    // console.log(form_correo_value)
    await fetch('/recoveryUser/sendemail',{
        method:'POST',
        body: JSON.stringify(form_correo_value),
        headers:{
            // "content-type":"application/json"
            "content-type":"application/json"
        }})
    .then(e => e.json())

    .then (e=>{
        console.log(e)
    })
}




