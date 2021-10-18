export const cambiarDataColeccion =  (base,dataCampos,propiedadName,posDataDeseada)=>{
    // // Copia el objeto
  let copiaObjeto = JSON.parse( JSON.stringify(base) )

  recorrerColeccion(copiaObjeto, dataCampos, propiedadName, posDataDeseada)

  // console.log(base)
    return copiaObjeto
}


const recorrerColeccion = (base, dataCampos, propiedadName, posDataDeseada) =>{

      // console.log(dataCampos)

      if (base?.constructor === Object){
        // console.log("Objeto  Objeto  Objeto  Objeto  Objeto  Objeto  ");
            let keys = Object.keys(base)
            if( base.hasOwnProperty(propiedadName) ){
              let idBuscar = base[propiedadName]
              if(!isNaN(idBuscar)){
                console.log( buscarDataPorId(dataCampos,idBuscar, posDataDeseada));
                // console.log(`data campos: ${dataCampos}`);
                // console.log(`Id buscar: ${idBuscar}`);
                // console.log(`Pos data deseada: ${posDataDeseada}`)
                base[propiedadName] = buscarDataPorId(dataCampos,idBuscar, posDataDeseada)
              }else console.warn(`La propiedad ${propiedadName} debería de ser un numero, pero es: ${idBuscar}`)
            }

            for(let atributos in keys){
                recorrerColeccion(base[keys[atributos]], dataCampos, propiedadName, posDataDeseada)
            }
      }

      if (base?.constructor === Array){
          // console.log("Arreglo  Arreglo  Arreglo  Arreglo  Arreglo  Arreglo  Arreglo  Arreglo");
          for(let data in base){
              recorrerColeccion( base[data], dataCampos,propiedadName, posDataDeseada)
          }
      }
      

}

const buscarDataPorId = (dataCampos,idBuscar, posDataDeseada) =>{

    let keys = Object.keys(dataCampos), posIdCampo = 0
    for(let tabla of keys){
     for( let atributos in dataCampos[tabla] ){
       if( dataCampos[tabla][atributos][posIdCampo] === idBuscar){
         return dataCampos[tabla][atributos][posDataDeseada]
       }
     }
    }
  



  // for (let table in dataCampos){
    //     buscarDataConId(dataCampos[table])
      
    // }


  // console.log(dataCampos);
}

const changeData = () =>{


}

// busqueda 
/*
    Variables:
    nombre de variable
    tipo de variable
 */

const objectCompare = (obj1, obj2) => {
    //if both objects are numbers or strings or booleans, compare them directly with ===
    if (
      (
        typeof(obj1) === 'number' ||
        typeof(obj1) === 'string' ||
        typeof(obj1) === 'boolean'
      ) &&
      (
        typeof(obj2) === 'number' ||
        typeof(obj2) === 'string' ||
        typeof(obj2) === 'boolean'
      )
    ) {
      if (!(obj1===obj2))
        return false;
      return true;
    }

    if (obj1.constructor === Object
      &&obj2.constructor === Object) {
      //case 2 they are objects
      //in this case
      let keys1 = Object.keys(obj1);
      let keys2 = Object.keys(obj2);

      //if they have a different number of keys they are definetly different
      if (keys1.length != keys2.length)
        return false;

      //if the second object doesn't have all the keys the first one does -> !=
      let i;
      for (i = 0; i < keys1.length; ++i)
        if (!(obj2.hasOwnProperty(keys1[i]))) return false;

      //they have the same keys, so compare their keys's objects one by one
      for (i = 0; i < keys1.length; ++i)
        if (!objectCompare(obj1[keys1[i]], obj2[keys1[i]])) return false;

      //if theiy keys's objects are the same, return true
      return true;
    }

    if (obj1.constructor === Array
      &&obj2.constructor === Array) {
        //if they don't have the same length, smth is wrong
        if (obj1.length != obj2.length) return false;

        //if the first array has all the elements found in the second one and vice versa they are the same (although the complexity of the algorythm is kinda big)
        let foundIn1 = 0, foundIn2 = 0;
        let i, j;
        for (i = 0; i < obj1.length; ++i)
          for (j = 0; j < obj2.length; ++j)
            if (objectCompare(obj1[i], obj2[j])) {
              ++foundIn2;
              break;
            }

        for (j = 0; j < obj2.length; ++j)
          for (i = 0; i < obj1.length; ++i)
            if (objectCompare(obj2[j], obj1[i])) {
              ++foundIn1;
              break;
            }

        if (foundIn1 === foundIn2 && foundIn1 === obj1.length)
          return true;
    }
    return false;
  };