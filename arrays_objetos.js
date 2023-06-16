function imprimirPrimerElementoArray(arr){
    console.log(arr[0])
}
imprimirPrimerElementoArray(['juanita', 'rigoberto', 'natilla'])



/*-------elemento por elemento-------*/
function imprimirElementoPorElemento (arr){
    for (let i =0; i < arr.length; i++){
        console.log(arr[i])
    }
}
imprimirElementoPorElemento(['juanita', 'jesus', 'maria'])


/*converti objeto en array*/
const obj = {
    nombre: 'jose',
    edad: 2,
    comida: ['pollo', 'vegetal'],
}
Object.values(obj)


/*--o-*/
function imprimirPorElementoObjeto (obj){
    const arr = Object.values(obj);
    for (let i=0; i<arr.length; i++){
        console.log(arr[i])
    }
}
imprimirPorElementoObjeto(obj);