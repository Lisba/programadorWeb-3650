var numeroUno = parseInt(prompt("Escriba un número"))
var numeroDos = parseInt(prompt("Escriba otro número"))

if(numeroUno % 2 == 0 && numeroDos % 2 == 0){
  document.write('Tus dos números son pares!')
} else if (numeroUno % 2 == 0 && numeroDos % 2 != 0) {
  document.write('Solo tu primer número es par, el segundo número es impar!')
} else if (numeroUno % 2 != 0 && numeroDos % 2 == 0) {
  document.write('Tu primer número es impar, tu segundo número es par!')
} else if (numeroUno % 2 != 0 && numeroDos % 2 != 0) {
  document.write('Ninguno de tus números es par, ambos son impares!')
}