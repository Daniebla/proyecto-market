"use strict";var index_carrusel=document.getElementById("box_index_carrusel"),carrusel_images=document.getElementById("carrusel_images"),carrusel_nav=document.getElementById("carrusel_nav"),images=["static/assets/img/about.jpg","static/assets/img/about2.jpg","static/assets/img/about.jpg","static/assets/img/about2.jpg"],cont=0,carrusel_active=!0;carrusel_images.style.width="".concat(images.length,"00%"),index_carrusel.addEventListener("mouseover",function(a){carrusel_active=carrusel_active&&!1}),index_carrusel.addEventListener("mouseout",function(a){carrusel_active=carrusel_active||!0});var fragmaento_carrusel_images=document.createDocumentFragment(),fragmaento_carrusel_nav=document.createDocumentFragment();for(var indicador in images){var carrusel_imagen=document.createElement("img");carrusel_imagen.setAttribute("src",images[indicador]),carrusel_imagen.classList.add("carrusel_images-imagen"),carrusel_imagen.id="carrusel_imagen-".concat(indicador),carrusel_imagen.style.width="".concat(100/images.length,"%");var carrusel_marcador=document.createElement("span");carrusel_marcador.id="carrusel_marcador-".concat(indicador),carrusel_marcador.classList.add("carrusel_nav-marcador"),0==indicador&&carrusel_marcador.classList.add("carrusel_nav-marcador-actual"),fragmaento_carrusel_images.appendChild(carrusel_imagen),fragmaento_carrusel_nav.appendChild(carrusel_marcador)}carrusel_images.append(fragmaento_carrusel_images),carrusel_nav.appendChild(fragmaento_carrusel_nav);var startinterval=function(){return setInterval(posicionador,2e3)};function posicionador(){1==carrusel_active&&(cont>=carrusel_images.children.length-1?cont=0:cont++,carrusel_moveImage(cont),carrusel_moveMarcador(cont))}startinterval();var carrusel_moveImage=function(a){carrusel_images.style.right="".concat(100*a,"%")},carrusel_moveMarcador=function(a){carrusel_nav.children[a].classList.add("carrusel_nav-marcador-actual"),1<=cont&&cont<=carrusel_images.children.length-1?carrusel_nav.children[a-1].classList.remove("carrusel_nav-marcador-actual"):carrusel_nav.children[carrusel_images.children.length-1].classList.remove("carrusel_nav-marcador-actual")};carrusel_nav.addEventListener("click",function(a){a.target.classList.contains("carrusel_nav-marcador")&&(carrusel_nav.children[cont].classList.remove("carrusel_nav-marcador-actual"),cont=a.target.id.slice(-1),carrusel_nav.children[cont].classList.add("carrusel_nav-marcador-actual"),carrusel_moveImage(cont))});