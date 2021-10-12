let middleware = () => {}

middleware.verifyIsLogin = (req,res,next)=>{
    // console.log('222222222222222222222222222222222222222222222222222\n')
    // console.log(req)

    // let bearerHeader =  req.headers['jwt'];
    // if(typeof bearerHeader !== 'undefined'){
    //     console.log("header: "+bearerHeader)

    // }else{
    //     console.log("header: "+bearerHeader)
    // }

    next()
}

module.exports = middleware
