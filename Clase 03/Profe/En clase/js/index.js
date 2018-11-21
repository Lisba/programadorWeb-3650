/*var numeros = [1, 6, 9, 4, 3, 720, 5, 15]

if (numeros[0] === 3) {
  document.write("Existe el numero 3 en el array!")
} else if (numeros[1] === 3) {
  document.write("Existe el numero 3 en el array!")
} else if (....) { //hasta indice 7 de array

  ...
}*/

/**
 * CICLO FOR
 */

// forma 1
/*for (var indice = 0; indice < numeros.length; indice++) {
  if (numeros[indice] === 3) {
    document.write("Existe el numero 3 en el array!")
  }
}*/

//forma 2
/*for (var indice in numeros) {

  if (numeros[indice] === 3) {
    document.write("Existe el numero 3 en el array!")
  }
}*/

//forma 3
/*numeros.forEach(numero => {
  if (numero === 3) {
    document.write("Existe el numero 3 en el array!")
  }
})*/

/**
 * CICLO WHILE
 */

/*var respuesta = ''
var numeroIteraciones = 1

while (respuesta.toLowerCase() != 'n') {

  respuesta = prompt("Desea continuar? s/n")
  console.log(numeroIteraciones++)
}*/

// do while

/*var respuesta = ''
var suma = 0

do {

  respuesta = prompt("Desea ingresar mas numeros? numero/t").toLowerCase()

  if (!isNaN(parseInt(respuesta))) {
    suma += parseInt(respuesta)
  }

} while (respuesta !== 't')

document.write(suma)*/

// break
var numeros = [1, 6, 9, 4, 3, 720, 5, 15]
/*var encontrado = false

for (var i = 0; i < numeros.length; i++) {

  if (numeros[i] === 3) {

    encontrado = true
    break
  }
  console.log(i)
}

document.write(encontrado ? "Existe el 3" : "No esta el numero 3!")*/

for (var i = 0; i < numeros.length; i++) {

  if (numeros[i] === 4) {
    continue
  }

  document.write(numeros[i] + "<br>")
}