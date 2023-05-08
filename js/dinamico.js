const botonVerLista = document.querySelector("#verLista");
const botonCerrarLista = document.querySelector("#cerrarLista");

const lista = document.querySelector("#lista");

lista.style.display = "none";

botonVerLista.addEventListener("click", () => {
  lista.style.display = "block";
});

botonCerrarLista.addEventListener("click", () => {
  lista.style.display = "none";
});
