const inputsede = document.querySelector('#sede');
const mostrar = document.querySelector('#mostrar-sede')
const inputsede2 = document.querySelector('#sede2');
const mostrar2 = document.querySelector('#mostrar-sede2')
inputsede.addEventListener("input", () => {
    mostrar.innerText = inputsede.value;
})
inputsede2.addEventListener("input", () => {
    mostrar2.innerText = inputsede2.value;
})

