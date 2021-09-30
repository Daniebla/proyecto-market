let logOutButton = document.getElementById('logOut')

console.log(logOutButton)
logOutButton.addEventListener('click',(e)=>{
    if(localStorage.getItem('jwt')==null){
        console.log('no existe regristro de jwt')
        localStorage.removeItem('jwt')
                
        
    }else{
        console.log('existe registro jwt')
        localStorage.removeItem('jwt')
        
    }
    console.log('por si acaso')
    localStorage.removeItem('jwt')

    var url = "http://localhost:3000/login"
    location.assign(url)


})