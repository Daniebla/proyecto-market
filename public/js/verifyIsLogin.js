let jwtToken = localStorage.getItem('jwt'),
    resCpy

console.log(jwtToken)
if(jwtToken == null){
    var url = "http://localhost:3000/login"
    location.assign(url)

}else{
    fetch('/api/verify',{
        method:'POST',
        headers:{"authorization":jwtToken}
    })
    .then(res=>{
        resCpy = res
        return res
    })
    .then(res=>{
        if(resCpy.status == 200){
            console.log('usuario verificado')
        }else{
            localStorage.removeItem('jwt')
            var url = "http://localhost:3000/login"
            location.assign(url)
        
        }
    })
    .catch(res=>{

    })
}