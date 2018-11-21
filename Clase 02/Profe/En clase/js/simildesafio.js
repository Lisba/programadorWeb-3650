var primerNumero = prompt("Primer numero")
var segundoNumero = prompt("Segundo numero")

var resultado = primerNumero / segundoNumero
if (isFinite(resultado)) {
  document.write(`El resultado de la division es: ${primerNumero / segundoNumero}`)
} else {
  document.write("Se esta intentando dividir por cero!")
}