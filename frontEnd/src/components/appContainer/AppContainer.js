// import React, { useState, useEffect } from 'react';
import { withRouter , Router} from 'react-router';
import React, { Component, useEffect, useState } from 'react';



    
    
    const App = ({children,unlisten,  history})=>{
        useEffect(()=>{
            
            // eslint-disable-next-line react-hooks/exhaustive-deps
            unlisten = history.listen((location, action)=>{
                // console.log(location);


                // let jwtToken = localStorage.getItem('jwt'),
                //     resCpy

                // console.log(jwtToken)
                // if(jwtToken == null){
                //     var url = "http://localhost:3000/login"
                //     location.assign(url)

                // }else{
                //     fetch('/api/verify',{
                //         method:'POST',
                //         headers:{"authorization":jwtToken}
                //     })
                //     .then(res=>{
                //         resCpy = res
                //         return res
                //     })
                //     .then(res=>{
                //         if(resCpy.status == 200){
                //             console.log('usuario verificado')
                //         }else{
                //             localStorage.removeItem('jwt')
                //             var url = "http://localhost:3000/login"
                //             location.assign(url)
                        
                //         }
                //     })
                //     .catch(res=>{

                //     })
                // }



            })
            
            return ()=>  unlisten()

            
        },[])
            return(
            <>
                {1? children: <h1>casas</h1>}
            </>
        )
    }
        export default withRouter(App)
        
