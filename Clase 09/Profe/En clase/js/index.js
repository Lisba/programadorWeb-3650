function permitirSoloNumero() {

  var valorIngresado = document.getElementById("numeros").value

  if (isNaN(valorIngresado)) {
    document.getElementById("numeros").style = "border:2px solid red;"
  } else {
    document.getElementById("numeros").style = "border:1px solid black;"
  }
}