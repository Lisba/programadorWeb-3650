var examResults = [ 7, 5, 6, 4, 3, 2, 8 ].reduce((a, b) => a + b);

function promedioArray (ParametroExamResults) {
  
  for (var i = 0; i < ParametroExamResults.length; i++) {
  }
  
  return i
}

var total = examResults / promedioArray(examResults)

document.write(promedioArray(examResults))

/*------------------------------------------------------------------------------------*/

/*var examResults = [ 7, 5, 6, 4, 3, 2, 8 ]

	function promedioArray(examResults) {

		var suma = 0

		examResults.forEach(examResults => {
			
			suma += examResults
		})
    
    for (var i = 0; i < examResults.length; i++) {}
    
    var promedio = suma / i

		return i
	}

document.write('El promedio del array es ' + promedioArray(examResults))*/

/*------------------------------------------------------------------------------------*/

/*function calcularPromedio(examResults){
  
  var sumaTotal = examResults[0] + examResults[1] + examResults[2] + examResults[3] + examResults[4] + examResults[5] + examResults[6]
  
  var promedio = sumaTotal / 7
  
  return promedio
}

document.write('El promedio del array es ' + calcularPromedio(examResults))*/