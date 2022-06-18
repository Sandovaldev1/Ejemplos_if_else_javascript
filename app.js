var ticket = 5;
var destino = "Masaya, Managua";
var confirmar;
var inicio;
var lugarDestino;
var nombre;


var inicio = confirm("Bienvenido al sistema de ticket TransNica\nPor favor de clic en Aceptar para continuar");
if (inicio == true){
    alert("Presione Aceptar para continuar");
}
else if (inicio == false){
    message("");
}

var confirmar = confirm("Si desea comprar un Ticket presione Aceptar\nSi no desea comprar presione Cancelar");
if(confirmar == true){
    var nombre = prompt("Por favor escriba su primer nombre y su segundo apellido");
}
else if(confirmar == false){
    message("");
}
prompt("Muchas gracias, el número de Tickets en este momento es de 5.\n¿Cuantos Tickets desea comprar?");
if (ticket <= 5){
var lugarDestino = prompt("Tenemos destino a: " + destino + "¿Donde desea viajar?");
}
if(lugarDestino === "Masaya"){
    let fechaActual = new Date();
    alert("Muchas gracias por su compra, la información detallada de su ticket es la siguiente:\nLugar destino: " + lugarDestino + "\nNombre del pasajero: " 
    + nombre + "\nFecha y hora de compra: " +
     fechaActual +
     "\nPresiona Aceptar para salir.");
}    
else if (lugarDestino === "Managua"){
    let fechaActual = new Date();
    alert("Muchas gracias por su compra, la información detallada de su ticket es la siguiente:\nLugar destino: " + lugarDestino + "\nNombre del pasajero: " 
    + nombre + "\nFecha y hora de compra: " +
     fechaActual +
     "\nPresiona Aceptar para salir.");
}
else{
    alert("Lo sentimos no tenemos más destinos.");
}


