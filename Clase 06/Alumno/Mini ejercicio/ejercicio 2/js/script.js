var numeros = prompt('Escriba 5 números separados por coma ","').split(",")

function sumarNumeros (numerosParametro) {
  
  var suma = 0
  
  numerosParametro.forEach(numerosParametro => {
    var numerosArray = parseInt(numerosParametro)
    
    suma += numerosArray
  })

  return suma
}

console.log(sumarNumeros(numeros))