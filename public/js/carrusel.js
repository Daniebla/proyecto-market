// const { active } = require("browser-sync");

const index_carrusel = document.getElementById("box_index_carrusel")
const carrusel_images = document.getElementById("carrusel_images")
const carrusel_nav = document.getElementById("carrusel_nav")

//registro de imagenes
const images = ["static/assets/img/about.jpg","static/assets/img/about2.jpg","static/assets/img/about.jpg","static/assets/img/about2.jpg"]
// Contador 
let cont = 0;
// carrusel Activo
let carrusel_active = true;
// carrusel images tamaño
carrusel_images.style.width=`${images.length}00%`;

// eventos
index_carrusel.addEventListener("mouseover",(e)=>{
    if(carrusel_active) carrusel_active=false;
    // console.log("activo: ",carrusel_active)
    
})

index_carrusel.addEventListener("mouseout",(e)=>{
    if(!carrusel_active) carrusel_active=true;
    // console.log("false: ",carrusel_active)
    
})

// introduccion de imagenes y variables
let fragmaento_carrusel_images = document.createDocumentFragment()
let fragmaento_carrusel_nav = document.createDocumentFragment()

for (let indicador in images){
    // IMAGENES
    let carrusel_imagen = document.createElement("img")
    carrusel_imagen.setAttribute("src",images[indicador])
    carrusel_imagen.classList.add("carrusel_images-imagen")
    carrusel_imagen.id= `carrusel_imagen-${indicador}`
    carrusel_imagen.style.width=`${100/(images.length)}%`;
    
    // NAV
    let carrusel_marcador = document.createElement("span")
    carrusel_marcador.id = `carrusel_marcador-${indicador}`
    carrusel_marcador.classList.add("carrusel_nav-marcador")
    if(indicador==0)
    carrusel_marcador.classList.add("carrusel_nav-marcador-actual")
    // APPEND FRAGMENTOS
    fragmaento_carrusel_images.appendChild(carrusel_imagen)
    fragmaento_carrusel_nav.appendChild(carrusel_marcador)
}
carrusel_images.append(fragmaento_carrusel_images);
carrusel_nav.appendChild(fragmaento_carrusel_nav);

// Contador_intervalo
const startinterval = ()=>setInterval  (posicionador,2000)

startinterval();

function posicionador () {
    
    if(carrusel_active == true){

        if(cont>=carrusel_images.children.length-1){
            cont=0;
        }else{
            cont ++;
        }

        carrusel_moveImage(cont)
        carrusel_moveMarcador(cont)
    }
}



//Funciones para mover el carrusel
const carrusel_moveImage = (id)=>{
    carrusel_images.style.right=`${id*100}%`
}

const carrusel_moveMarcador = (id)=>{
    carrusel_nav.children[id].classList.add("carrusel_nav-marcador-actual")

    if(cont >= 1 && cont<= carrusel_images.children.length-1)
        carrusel_nav.children[id-1].classList.remove("carrusel_nav-marcador-actual")
    else{
        carrusel_nav.children[carrusel_images.children.length-1].classList.remove("carrusel_nav-marcador-actual")
    }
}

//Funcion para seleccionar marcador
carrusel_nav.addEventListener("click",(e)=>{
    if(e.target.classList.contains("carrusel_nav-marcador")){
        
        // Remueve la clase marcador
        carrusel_nav.children[cont].classList.remove("carrusel_nav-marcador-actual")
        // Obtenemos el nuevo contador
        cont=e.target.id.slice(-1);
        // Agregar clase marcador
        carrusel_nav.children[cont].classList.add("carrusel_nav-marcador-actual")
        // Mover carrusel
        carrusel_moveImage(cont)

        
    }

})


