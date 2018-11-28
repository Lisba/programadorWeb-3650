/**
 * Forma 1
 */

/*function calcularPromedio(parametroExamResults) {

  var resultado = 0

  for (var i = 0; i < parametroExamResults.length; i++) {

    resultado = resultado + parametroExamResults[i] //resultado += parametroExamResults[i]
  }

  return resultado / parametroExamResults.length
}

var examResults = []
examResults = [7, 5, 6, 4, 3, 2, 8]

document.write(calcularPromedio(examResults))*/

/**
 * Forma 2 
 */

var resultado = 0

function calcularPromedio(parametroExamResults) {


  for (var i = 0; i < parametroExamResults.length; i++) {

    resultado = resultado + parametroExamResults[i] //resultado += parametroExamResults[i]
  }

  resultado = resultado / parametroExamResults.length
}

var examResults = []
examResults = [7, 5, 6, 4, 3, 2, 8]
calcularPromedio(examResults)

document.write(resultado)