// const { json } = require("body-parser");

const formulario = document.getElementById('formulario')

formulario.addEventListener("submit",(e)=>{
    e.preventDefault();

    fetch('/upload',{
        method:'POST',
        body:  new FormData(formulario),
        // JSON.stringify(e) , 
        Headers:{
            "Content-type":"application/json"
        }
    })
    // .then(res=>res.json())
    .then(res=>res.json())
    .then(res=>console.log(res))
})