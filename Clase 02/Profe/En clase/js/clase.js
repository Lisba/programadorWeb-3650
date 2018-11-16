// if
/*var clima = "templado"

if (clima == "lluvioso") {
  document.write("Lleva paraguas")
} else {
  document.write("Si queres no lleves paraguas")
}*/

/*var clima = "templado"

if (clima != "lluvioso") { //true
  document.write("No lleves paraguas!")
}*/

var numero = 5

/*if (numero > 5) {
  document.write("Es mayor a 5!")
}

if (numero > 6) {
  document.write("<br> Es mayor a 6!")
}*/

/*if (numero >= 5) {
  document.write("cumple condicion numerica!")
}*/

//comparacion ternaria

/*var clima = "lluvioso"

document.write(clima == "lluvioso" ? "El clima esta lluvioso" : "El clima no esta lluvioso")

*/

/*var diaSemana = prompt("Ingrese dia de semana", "Lunes").toLowerCase()

if (diaSemana == "lunes") {
  document.write("Hoy es Lunes")
} else if (diaSemana == "martes") {
  document.write("Hoy es Martes")
} else if (diaSemana == "miercoles") {
  document.write("Hoy es Miercoles")
}*/

/*switch (diaSemana) {

  case "lunes":
    document.write("Hoy es Lunes")
    break
  case "martes":
    document.write("Hoy es Martes")
    break
  case "miercoles":
    document.write("Hoy es Miercoles")
    break
  default:
    document.write("No es ninguno de esos dias!")
}*/

// operadores de comparacion

// === (comparacion de valor y tipo)

var numero1 = "1200"
var numero2 = 1200

/*if (numero1 === numero2) {

  document.write("Son iguales!")
} else {
  document.write("No son iguales!")
}*/

/*if (numero1 !== numero2) {
  document.write("No son iguales!")
} else {
  document.write("Son iguales!")
}*/

// Operadores logicos

// NOT
/*var clima = "templado"
var climaLluvioso = (clima == "lluvioso")

if (!climaLluvioso) { // climaLluvioso == false
  document.write("No Lleves paraguas")
} else {
  document.write("Lleva paraguas")
}*/

// &&: AND

var a = 5
var b = 6

/*if ((a < 6 && a > 4) && b < 9) {
  document.write("Cumple ambas condiciones!")
} else {
  document.write("No cumple ambas condiciones!")
}*/

//||: OR

/*if (a > 5 || b > 6) {

  document.write("Cumple alguna condicion!")
} else {
  document.write("No cumple ninguna condicion!")
}*/

// mezcla

if ((a > 4 && b > 7) || (a > 3 && b > 5)) {

  document.write("cumple alguna de las 2 condiciones!")
} else {
  document.write("no cumple ninguna condicion!")
}