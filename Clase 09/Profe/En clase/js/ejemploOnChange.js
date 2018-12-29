var listaPaises = [{
    id: 1,
    nombre: "Argentina",
    continente: "America"
  },
  {
    id: 2,
    nombre: "Suiza",
    continente: "Europa"
  },
  {
    id: 3,
    nombre: "Japon",
    continente: "Asia"
  },
  {
    id: 4,
    nombre: "Australia",
    continente: "Oceania"
  },
  {
    id: 5,
    nombre: "Nigeria",
    continente: "Africa"
  },
]

var contenedorPaises = document.getElementById("paises")

for (var index = 0; index < listaPaises.length; index++) {
  var pais = listaPaises[index]

  var opcion = document.createElement("option")
  opcion.text = pais.nombre
  opcion.value = pais.id
  contenedorPaises.appendChild(opcion)

}

function mostrarContinente() {

  var idPaisElegido = document.getElementById("paises").value

  /*var paisesFiltrados = listaPaises.filter(function (pais) {

    return pais.id == idPaisElegido
  })
  
  // Es lo mismo que
  var paisesFiltrados = listaPaises.filter(pais => pais.id == idPaisElegido)

  */

  var paisesFiltrados = []
  for (var index = 0; index < listaPaises.length; index++) {
    const pais = listaPaises[index]

    if (pais.id == idPaisElegido) {
      paisesFiltrados.push(pais)
    }

  }

  document.getElementById("continente").innerHTML = paisesFiltrados[0].continente
}