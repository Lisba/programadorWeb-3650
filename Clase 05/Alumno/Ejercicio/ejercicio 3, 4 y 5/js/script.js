class Persona {

    constructor (nombre, edad, dni, ciudadDeResidencia) {

        this.nombre = nombre
        this.edad = edad
        this.dni = dni
        this.ciudadDeResidencia = ciudadDeResidencia
    }

    showName(){
        document.write(`El nombre de la persona es ${this.nombre} <br>`)
    }

    showAge(){
        document.write(`La edad de la persona es ${this.edad} <br>`)
    }

    showDni(){
        document.write(`El DNI de la persona es ${this.dni} <br>`)
    }

    showCiudadDeResidencia(){
        document.write(`La ciudad de residencia de la persona es ${this.ciudadDeResidencia} <br> <br>`)
    }
}

var arrayObjetos = [
    {
        firstName: 'Daniel',
        age: '25',
        dni: '95.848.776',
        ciudadDeResidencia: 'caba',
    },
    {
        firstName: 'Oscar',
        age: '30',
        dni: '31.358.246',
        ciudadDeResidencia: 'Valencia',
    },
    {
        firstName: 'Pedro',
        age: '20',
        dni: '40.543.224',
        ciudadDeResidencia: 'caba',
    },
    {
        firstName: 'Sofía',
        age: '28',
        dni: '33.299.671',
        ciudadDeResidencia: 'Rosario',
    },
    {
        firstName: 'Angelica',
        age: '26',
        dni: '35.948.756',
        ciudadDeResidencia: 'Margarita',
    },
]

function cantidadCaba(arrayObjetos) {

    var suma = 0

    for (var i = 0; i < arrayObjetos.length; i++) {
        var student = new Persona (arrayObjetos[i].firstName, arrayObjetos[i].age, arrayObjetos[i].dni, arrayObjetos[i].ciudadDeResidencia)
    
        if(arrayObjetos[i].ciudadDeResidencia == 'caba' ){
            suma += 1
        }

        student.showName()
        student.showAge()
        student.showDni()
        student.showCiudadDeResidencia()
    }

    return suma
}

document.write('La cantidad de residentes de CABA es: ' + cantidadCaba(arrayObjetos) + '<br>')