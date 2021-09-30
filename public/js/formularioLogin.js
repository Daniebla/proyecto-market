const form = document.getElementById('form-login'),
      form_verify = document.getElementById('form-verify')

const  login = async ()=>{
    let user ={
        // id: form.form_id.value 
        correo: document.getElementById("form_correo").value,
        contra: document.getElementById("form_contra").value
    }
    let resCpy
    await fetch('/api/loginPost',{  
        method:'POST',
        body:JSON.stringify(user),
        headers:{
            "content-type":"application/json"
        }})
    .then((res)=>{
        console.log(res)
        resCpy = res
        return res.json()
    })
    .then((res)=>{
        if(resCpy.status == 200){
            setTokenUsuario(res)
            var url = "http://localhost:3000/"
            location.assign(url)
        }else{
            console.log('error al logear')
        }   

    })
}
   
const setTokenUsuario= (token)=>{
    localStorage.setItem("jwt","barer "+token)
    jwtToken = localStorage.getItem("jwt")
    console.log(jwtToken)
}
const getUsuario = ()=>{
    jwtToken = localStorage.getItem("jwt")
    return jwtToken
}
const verify =  () =>{
    let jwtToken = getUsuario()

    fetch('/api/verify',{
    method:'POST',
    headers:{"authorization":jwtToken}
    })
    .then((e)=>e.json())
    .then(e=> {console.log(e)})
    // .then((e)=>console.log(e.authData.user))
}
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    login()
})
form_verify.addEventListener('submit',(e)=>{
    e.preventDefault()
    verify()
})