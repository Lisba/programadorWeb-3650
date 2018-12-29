/*var paisIngresado = document.getElementById("paises")

console.log(paisIngresado.value)
console.log(paisIngresado.id)
console.log(paisIngresado.type)
console.log(paisIngresado.name)*/

// Agrego HTML

//document.getElementById("texto").innerHTML = "<p>Este es un nuevo Texto!</p>"

// Acceder a todos los elementos de una clase

//var listaPaises = document.getElementsByClassName("lista")
//console.log(listaPaises)

/*for (var i = 0; i < listaPaises.length; i++) {

  console.log(listaPaises[i])
}

// agregar numeros

for (var i = 0; i < listaPaises.length; i++) {

  listaPaises[i].innerHTML = `<p>${i}</p>`
}*/

// Crear un nuevo elemento del DOM

/*var nuevoParrafo = document.createElement("p") // nuevo elemento de tipo parrafo
//console.log(nuevoParrafo)

var contenedor = document.getElementById("contenedor")
nuevoParrafo.innerHTML = "Texto de parrafo!"
contenedor.appendChild(nuevoParrafo)*/

// Objeto padre

var paises = ["Argentina", "Suecia", "Brasil", "Italia"]

paises.forEach(pais => {

  var nuevoPais = document.createElement("li")
  nuevoPais.innerHTML = pais
  document.getElementById("primerPais").parentNode.appendChild(nuevoPais)

})

// Sacar hijos

var nodoAEliminar = document.getElementById("primerPais")
nodoAEliminar.parentNode.removeChild(nodoAEliminar)