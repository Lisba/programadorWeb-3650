var numeros = []
    
var prompt = numeros.push(parseInt(prompt('Escriba 5 números separados por coma ","')))

function sumarNumeros (numeros) {
  var result = numeros.reduce((a, b) => a + b)
  
  return result
}

console.log(sumarNumeros(numeros))