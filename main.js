function somTocaGrilo (){

document.querySelector("#som_tecla_grilo").play();
}
document.querySelector(".tecla_grilo").onclick =somTocaGrilo;

const listaDeTeclas = document.querySelectorAll(".tecla");
listaDeTeclas[4].onclick = tocaSomGrilo;