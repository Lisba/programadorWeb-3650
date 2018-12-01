// typeof

/*var elementosSueltos = []

var nombre = "Juan"
elementosSueltos.push(nombre)

var numeroEntero = 50
elementosSueltos.push(numeroEntero)

var numeroFloat = 2.6
elementosSueltos.push(numeroFloat)

var validacion = true
elementosSueltos.push(validacion)

var objeto = {}
elementosSueltos.push(objeto)

// elementosSueltos.forEach(function (item) {
//   document.write(`<div> El tipo del elemento es: ${typeof(item)} </div>`)
// })

for (var index = 0; index < elementosSueltos.length; index++) {
  var item = elementosSueltos[index];

  if (typeof (item) == "number") {
    continue
  }

  document.write(`<div> El tipo del elemento es: ${typeof(item)} </div>`)

}*/

// indexOf

/*var oracion = "El tiempo esta tiempo lluvioso"
console.log(oracion.indexOf("tiempo"))*/

// lastIndexOf

/*var oracion = "El tiempo esta tiempo lluvioso"
console.log(oracion.lastIndexOf("tiempo"))*/

//toLowerCase

/*var oracion = "LA musica esta MUY fUeRTE"
console.log(oracion.toLowerCase())*/

//toUpperCase

/*var oracion = "LA musica esta MUY fUeRTE"
console.log(oracion.toUpperCase())*/

// split

/*var elementoCSV = "1,2,pedro,carpintero,15/08/1987" // [1,2,"pedro","carpintero","15/08/1987"]

var resultado = elementoCSV.split(",")

console.log(resultado)*/

//includes

/*var str = "Hola Clase de PW de CH"
var resultado = str.includes("pw")
console.log(resultado)*/

//replace

var str = "Hola Clase de PW de CH"
var resultado = str.replace("PW", "Programador Web").replace("Clase", "gente")
console.log(resultado)