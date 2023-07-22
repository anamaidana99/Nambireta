let arrayIMG = ["multimedia/NAMBI RETA PNG (1) (1).png","multimedia/53 podcast.png"];
const CONTENEDORIMG = document.getElementById("episodios-img");
const BOTON = document.getElementById("button-load-more");
console.log(BOTON);

arrayIMG.forEach(src => {
    const IMAGEN = document.createElement("img");
    IMAGEN.src = src
    IMAGEN.classList.add("img-episodio")
    CONTENEDORIMG.appendChild(IMAGEN);
});

BOTON.addEventListener("click", cargarMas);

function cargarMas (){
    let arrayIMG = ["multimedia/NAMBI RETA PNG (1) (1).png","multimedia/53 podcast.png"];
    arrayIMG.forEach(src => {
        const IMAGEN = document.createElement("img");
        IMAGEN.src = src
        IMAGEN.classList.add("img-episodio")
        CONTENEDORIMG.appendChild(IMAGEN);
    });
}