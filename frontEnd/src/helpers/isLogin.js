export const getUsuario = ()=>{
    const jwtToken = localStorage.getItem("jwt")
    return jwtToken
}

export const setTokenUsuario= (token)=>{
    localStorage.setItem("jwt","barer "+token)
    let jwtToken = localStorage.getItem("jwt")
    console.log(jwtToken)
}