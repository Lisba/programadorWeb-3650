//Declaración de variables
var saldoCuenta = 10000;

actualizarSaldoEnPantalla();

//Funcion que se ejecuta al hacer click en el botón "extraer dinero"
function extraerDinero() {
    var monto = parseInt(prompt("Ingresa la cantidad de dinero que quieres extraer"));
    saldoCuenta -= monto
    actualizarSaldoEnPantalla()
}

//Función que se ejecuta cuando se hace click en el botón "Depositar dinero"
function depositarDinero() {
    var respuesta = parseInt(prompt("Ingresa la cantidad de dinero que deseas depositar"));
    saldoCuenta += respuesta
    actualizarSaldoEnPantalla()
}


//Función que actualiza el saldo de la cuenta en el HTML
function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}