var numeroUno = parseInt(prompt("Escriba un número"))
var numeroDos = parseInt(prompt("Escriba otro número"))
var resultado

if (numeroUno >= 1 && numeroUno <= 100 && numeroDos >= 1 && numeroDos <= 100) {
  resultado = "Tus dos números están entre el 1 y el 100"
} else {
  if (numeroUno >= 1 && numeroUno <= 100) {
    resultado = "Solo tu primer número está entre el 1 y el 100"
  } else {
      if (numeroDos >= 1 && numeroDos <= 100) {
          resultado = "Solo tu segundo número está entre el 1 y el 100"
    } else {
          resultado = "Ninguno de tus números está entre el 1 y el 100"
      }
    }
  }

document.write(resultado)

/*var numeroUno = parseInt(prompt("Escriba un número"))
var numeroDos = parseInt(prompt("Escriba otro número"))
var resultado

if (numeroUno >= 1 && numeroUno <= 100 && numeroDos >= 1 && numeroDos <= 100) {
    resultado = 'Tus dos números están entre el 1 y el 100'
} else { 
  if (numeroUno >= 1 && numeroUno <= 100)
    resultado = 'Solo tu primer número está entre el 1 y el 100'
  else { 
    if (numeroDos >= 1 && numeroDos <= 100)
      resultado = 'Solo tu segundo número está entre el 1 y el 100'
    else
      resultado = 'Ninguno de tus números está entre el 1 y el 100'
   }
}

document.write(resultado)*/