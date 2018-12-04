var string1 = prompt('¿A buscar?').toUpperCase()
var string2 = prompt('¿En donde buscar?').toUpperCase()

function comparaTextos (string1, string2) {
  
  var result = string2.indexOf(string1)
  
   if (result == -1){
      result = false
 } else {
      result = true
 }
  
  return result
}

console.log(comparaTextos(string1, string2))