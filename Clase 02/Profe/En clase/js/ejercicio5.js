var primerNumero = prompt("Primer numero")
var segundorNumero = prompt("Segundo numero")

if ((primerNumero >= 1 && primerNumero <= 100) &&
  (segundorNumero >= 1 && segundorNumero <= 100)) {
  document.write("Estan entre 1 y 100")
} else {
  document.write("Los numeros no estan entre 1 y 100!")
}