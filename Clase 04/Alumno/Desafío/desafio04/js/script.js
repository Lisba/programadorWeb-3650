var studentsList = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956
  },
  {
    firstName: 'Pablo',
    lastName: 'Picapiedras',
    dni: 45678983
  }
]

var nombre = prompt('Escriba el nombre o apellido del alumno')

function buscarAlumno(nombre){

  var resultado

  for (var i = 0; i < studentsList.length; i++) {

      if (nombre == studentsList[i].firstName || nombre == studentsList[i].lastName) {
          resultado = i
        break
      } else {
          resultado = '-1'
      }
  }

  return resultado
}

if (buscarAlumno(nombre) == '-1') {
  console.log('No se pudo encontrar el estudiante')
} else {
  console.log('Se encontró el estudiante en la posición ' + buscarAlumno(nombre) + ' de la lista')
}