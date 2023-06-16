const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafo = document.querySelector('.parrafo');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');
console.log(input.value);
console.log ({
    h1,
    p,
    parrafo,
    pid,
    input,
});
h1.innerHTML = 'pato feo';
p.innerText = 'feo'
/* console.log(h1.getAttribute('class'));
h1.setAttribute('class', 'rojo'); */

h1.classList.add('rojo');
h1.classList.remove('titulo');
// h1.classList.toggle('verde');
//h1.classList.constains ('verde);
input.value = "121323";

/* console.log(document.createElement('img')); */


const img = document.createElement('img');
img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png');
console.log(img);
p.append(img);