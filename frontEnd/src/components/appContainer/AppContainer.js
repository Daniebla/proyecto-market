// import React, { useState, useEffect } from 'react';
import { withRouter , Router} from 'react-router';
import React, { Component, useEffect, useState } from 'react';



    
    
    const App = ({children,unlisten,  history})=>{
        useEffect(()=>{
            
            // eslint-disable-next-line react-hooks/exhaustive-deps
            unlisten = history.listen((location, action)=>{
                console.log(location);
            })
            
            return ()=>  unlisten()

            
        },[])
            return(
            <>
            </>
        )
    }
        export default withRouter(App)
        
