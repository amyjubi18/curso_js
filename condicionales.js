const tipoDeSuscripcion = "Basic";
switch (tipoDeSuscripcion){
    case "Free":
    console.log("solo puede tomar los cursos gratis");
    break;
    case "Basic":
    console.log("puede tomar cursos por un mes");
    break;
    case "Expert":
    console.log("puede tomar cursos por un año");
    break;
    case "ExpertDuo":
    console.log("dos personas pueden tomar cursos por un año");
    break;
    
}
/* --------- */
if (tipoDeSuscripcion == 'Free'){
    console.log("solo puede tomar los cursos gratis");
}else if(tipoDeSuscripcion == 'Basic'){
    console.log("puede tomar cursos por un mes");
}
else if(tipoDeSuscripcion == 'Expert'){
    console.log("puede tomar cursos por un año");
}
else if(tipoDeSuscripcion == 'ExpertDuo'){
    console.log("dos personas pueden tomar cursos por un año");
}
