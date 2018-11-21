var operacion = prompt('Elija el simbolo de la operacion a realizar ' + '(+, -, *, /)')
var numeroUno = parseInt(prompt('Ingrese un número'))
var numeroDos = parseInt(prompt('Ingrese otro número'))

switch(operacion) {
    case '+':
        document.write(numeroUno + numeroDos)
        break
    case '-':
        document.write(numeroUno - numeroDos)
        break
    case '*':
        document.write(numeroUno * numeroDos)
        break
    case '/':
        do {
            if(numeroDos === 0){
                numeroDos = parseInt(prompt('Ingrese otro número'))
            }
            
        } while (numeroDos === 0)

        document.write(numeroUno / numeroDos)
}



