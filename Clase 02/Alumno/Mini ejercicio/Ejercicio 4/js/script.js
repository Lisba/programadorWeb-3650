var numeroUno = parseInt(prompt("Escriba un número"))
var numeroDos = parseInt(prompt("Escriba otro número"))
var resultado = numeroUno / numeroDos

if (isFinite(resultado)) {
  document.write('El resultado de la división es: ' + resultado)
} else {
  document.write('Se está intentando dividir entre 0')
}