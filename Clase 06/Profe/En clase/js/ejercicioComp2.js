function sumarNumeros(numerosParametro) {

  var numerosArray = numerosParametro.split(",")
  var suma = 0

  numerosArray.forEach(numeroString => {

    suma = suma + parseInt(numeroString)
  })

  return suma
}

//2, 5, 7, -9, 5 ==> ["2", "5", "7", "-9", "5"]
var numeros = prompt("Ingrese numeros separados por coma")
document.write(`La suma es: ${sumarNumeros(numeros)}`)