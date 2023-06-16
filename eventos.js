const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResultado = document.querySelector('#resultado');

/* btn.addEventListener('click', btnOnClick);
 */
form.addEventListener('submit', sumarInputsValues);

/* 
function btnOnClick(){
    /* console.log('Escuchando el evento de click') */
    /* console.log(input1.value + input2.value); 
    const sumaInputs = input1.value + input2.value;
    pResultado.innerText = "Resultado" + sumaInputs;
} */

function sumarInputsValues(event){
    /* console.log({event}); */
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResultado.innerText = "Resultado" + sumaInputs;
}