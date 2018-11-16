var edad
var sexo
var strings

sexo = prompt("¿Eres Hombre o Mujer?").toLowerCase()
edad = parseInt(prompt("¿Cuál es tu edad?", "18"))

switch (sexo) {

    case "hombre":
        strings = "Sr"
        break
    case "mujer":
        strings = "Sra"
        break
    default: strings = "Sx"
}


if (edad >= 18) {
    console.log(strings + " usted es mayor de edad, puede ingresar!")
} else {
    console.log(strings + " usted es menor de edad, no puede ingresar!")
}