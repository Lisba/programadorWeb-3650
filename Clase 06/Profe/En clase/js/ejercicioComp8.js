var paises = ["Suiza", "Japon", "Italia", "Angola", "Brasil"]
var paisesDos = ["Alemania", "Argentina"]

// Froma uno

function soloPaisesConA1() {

  // Elimino paises que no comienzan con A
  var paisesSoloConA = []

  for (var index = 0; index < paises.length; index++) {
    var pais = paises[index]

    if (pais["0"].toUpperCase() !== "A") {
      continue
    }

    paisesSoloConA.push(pais)

  }

  // Agregar paises de segundo array
  paisesDos.forEach(function (paisArrayDos) {

    paisesSoloConA.push(paisArrayDos)
  })


  return paisesSoloConA
}

// Froma dos

function soloPaisesConA2() {

  // Elimino paises que no comienzan con A
  var paisesSoloConA = paises.filter(paisDos => paisDos["0"].toUpperCase() == "A")

  // Agregar paises de segundo array usando spread operator
  paisesSoloConA = [...paisesSoloConA, ...paisesDos]

  return paisesSoloConA
}

console.log(soloPaisesConA2())