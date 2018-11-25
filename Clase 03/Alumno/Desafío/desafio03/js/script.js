var operacion = prompt('Elija el simbolo de la operacion a realizar ' + '(+, -, *, /)')
var numeroUno = parseInt(prompt('Ingrese un número'))
var numeroDos = parseInt(prompt('Ingrese otro número'))

var resultado

switch(operacion) {
    case '+':
        resultado = numeroUno + numeroDos
        break
    case '-':
        resultado = numeroUno - numeroDos
        break
    case '*':
        resultado = numeroUno * numeroDos
        break
    default:
        do {
            if(numeroDos === 0){
                numeroDos = parseInt(prompt('Ingrese otro número'))
            }
            
        } while (numeroDos === 0)

        resultado = numeroUno / numeroDos
}

document.write(resultado)

