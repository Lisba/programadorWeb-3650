var stringArray = []
var numberArray = []
var value

while (value != 't') {
  
  value = prompt('Escriba un nombre o un número')
  
  if(value == isNaN(value)){
      stringArray.push(value)
    } else {
      numberArray.push(value)
    }
}

document.write(stringArray + '<br>' + numberArray)