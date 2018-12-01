/*var numeros = []

//push
numeros.push(5)
numeros.push(7)
numeros.push(3)

console.log(numeros)

//pop
var numeroSacado = numeros.pop()
console.log(numeros)
console.log(numeroSacado)*/

//join

/*var numeros = [4, 6, 8, 1]

console.log(numeros.join("-"))*/

// slice

/*var frutas = ["Naranja", "Limon", "Manzana", "Mango"]
var citricos = frutas.slice(1, 2)
console.log(citricos)*/

// filter

var students = [{
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987,
    email: 'juan@gmail.com'
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989,
    email: 'ana@gmail.com'
  },
  {
    firstName: 'Pedro',
    lastName: 'Pérez',
    dni: 45678956,
    email: 'pedro@gmail.com'
  }
]

var conApellidoPerez = students.filter(student => student.lastName == "Pérez")
console.log(conApellidoPerez)
/*students.forEach(student => {
  console.log(student.firstName)
  console.log(student.lastName)
  console.log(student.dni)
  console.log(student.email)
})*/

/*var numeros = [2, 5, 78, 33, 7]

numeros.forEach(numero => {
  console.log(numero)
})*/


/*

var impares = numeros.filter(function (numero) {
  return numero % 2 != 0
})
console.log(impares)*/