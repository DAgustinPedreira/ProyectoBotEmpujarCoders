
function botonComponentes() {
    buttonSendText("Componentes")
}

function botonMonitores() {
    buttonSendText("Monitores")
}

function botonMouse() {
    buttonSendText("Mouse")
}

function botonGabinetes() {
    buttonSendText("Gabinetes")
}

function botonMemorias() {
    buttonSendText("Memorias")
}

function getBotResponse(input) {
    let respuesta = input.toLowerCase();

    //piedra papel tijera
    switch (respuesta) {
        case "piedra":
            return ("papel")
            break;
        case "papel":
            return ("tijera");
            break;
        case "tijera":
            return ("piedra");
            break;

            //Respuestas
        case "componentes":
            return("Estas en la seccion componentes")
            break;
        case "monitores":
            return("Estas en la seccion monitores")
            break;
        case "mouse":
            return("Estas en la seccion mouse")
            break;
        case "gabinetes":
            return("Estas en la seccion gabinetes")
            break;
        case "memorias":
            return("Estas en la seccion memorias")
            break;
            
    } 
}


    // Simple responses
    //if (respuesta == "hola") {
   //     return "Hola!";
   // } else if (respuesta == "adios") {
     //   return "Nos vemos!";
   // } else if (respuesta == "componentes") {
    //    return "Esta en sección componentes"
    //} else {
     //   return "Intenta preguntarme otra cosa!";
    //}//