const nombre = 'Amanda Mariel';
const apellido = 'Garcia Trinidad';
const completeName = nombre + apellido;
const usuario = 'amyjubi18';
console.log("Mi nombre es " + completeName + ",pero mi apodo es " + usuario + ".");

function nombreCompleto (name, apellido){ 
    return name + ' ' + apellido 
}

function saludo(name, apellido, usuario){
    const completeName = nombreCompleto (name, apellido);
    console.log("Mi nombre es " + completeName + ", pero mi apodo es" + usuario + ".");
}
saludo('tice', 'aponte', 'gatto');