//variables primitivas
var numero = 9 //number
var Numero = 9
var nombre = "Juan" //string
var estado = true // boolean
document.write(numero + "<br>")
console.log(nombre)
var apellido = 'Gimenez'
var nombreCompleto = `${nombre} / ${apellido}`
console.log(nombreCompleto)

// Este es un comentario de una linea
/**
 * Este es un comentario de varias lineas
 */
var valorNulo = null

//arrays
var numeros = [1, 9, 8, 4, 7] // El 1 es la posicion cero, y la longitud es 5
console.log(numeros)
document.write(numeros)
console.log(numeros[3])

//objects

var libro = {
  "nombre": "1984",
  "autor": "Orwell",
  "editorial": "de bolsillo",
  "stock": 56
}

console.log(libro.autor)
console.log(libro["stock"])

// operadores aritmeticos

// asignacion

var numero2 = 9

// suma

var numeroUno = 4
var numeroDos = 8
console.log(numeroUno + numeroDos)

// resta

numeroUno = 40
numeroDos = 20
console.log(numeroUno - numeroDos)

// multiplicacion

numeroUno = 40
numeroDos = 20
console.log(numeroUno * numeroDos)

//division

numeroUno = 40
numeroDos = 0
console.log(numeroUno / numeroDos)
console.log("sadasd" / 9)

// resto de una division

numeroUno = 40
numeroDos = 21
console.log(numeroUno % numeroDos)

// incremental
var subtotal = 5
subtotal++
console.log(subtotal)

// decremental
subtotal = 5
subtotal--
console.log(subtotal)

// funciones importantes de JS

// prompt
var persona = prompt("Cual es tu nombre?", "Escribi tu nombre")
document.write(`<br>${persona}<br>`)

//parseint

var primerNumero = 50
var segundoNumero = "5"

document.write(primerNumero / parseInt(segundoNumero))