
export const SugerenciaArticuloContenido = (data)=>{
    // console.log(data.data)
        return(
            // <h1>sugerencia articulo</h1>
            <div className="sugerenciaArticulo_Hijo">
                    <img src={data.data.src} alt="imgen" className="sugerenciaArticulo_Hijo-imagen"/>
                    <div className="sugerenciaArticulo_Hijo-caracteristicasArticulo">
                        <span className="sugerenciaArticulo_Hijo-precio">{data.data.precio}</span>
                        <div className="sugerenciaArticulo_Hijo-ventajas">
                            {
                                data.data.ventajas.length !== 0  ?(

                                    data.data.ventajas.map((ventaja,indice)=>(
                                        indice <= 4?
                                         (
                                            <p key={indice} className="sugerenciaArticulo_Hijo-ventaja">{ventaja}</p>
                                            // <></>
                                        )
                                        :(
                                            
                                            <p key={indice} className="sugerenciaArticulo_Hijo-ventaja"></p>
                                            // <></>
                                        )
                                        
                                        // <span className="sugerenciaArticulo_Hijo-ventaja">{ventaja}</span>
                                    ))
                                ):<h1 key={data.data.ventajas.length}>ficios</h1>
 
                            }
                        </div>
                        <p className="sugerenciaArticulo_Hijo-parrafo">12234 sdklfjkl salj flsjl fsklajl jsljd lsjal jsldj lfsdjlj lskadjl  </p>
                    </div>
            </div>
        )
    }

