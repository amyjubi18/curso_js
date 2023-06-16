if(tipoDeSuscripcion == 'Free'){
    console.log("Solo puedes tomar cursos' gratis");
}else if (tipoDeSuscripcion == 'Basic'){
    console.log("Solo puedes tomar cursos' por un mes");

}else if (tipoDeSuscripcion == 'Expert'){
    console.log("Solo puedes tomar cursos por un año");

}else if(tipoDeSuscripcion == 'ExperDuo'){
    console.log("dos personas pueden ver cursos por un año");

}
/*replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if*/

function conseguirTipoSuscripcion(suscripcion){
    if(suscripcion == 'Free'){
        console.log("Solo puedes tomar cursos' gratis");
        return;
    } if (suscripcion == 'Basic'){
        console.log("Solo puedes tomar cursos' por un mes");
    return;
    } if (suscripcion == 'Expert'){
        console.log("Solo puedes tomar cursos por un año");
    return;
    } if(suscripcion == 'ExperDuo'){
        console.log("dos personas pueden ver cursos por un año");
    return;
    }
        console.warn("no existe")
    
}
conseguirTipoSuscripcion('Free')
/*replica el comportamiento con arrays o objetos y un solo condicional*/



