var daysOfTheWeek = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Sabado',
  'Domingo',
  'Pato'
]

for (var i = 0; i < daysOfTheWeek.length; i++){

  switch (i) {
      case 0:
      i = 'El ' + daysOfTheWeek[0] + ' es un día hábil de semana'
      console.log(i)
      case 1:
      i = 'El ' + daysOfTheWeek[1] + ' es un día hábil de semana'
      console.log(i)
      case 2:
      i = 'El ' + daysOfTheWeek[2] + ' es un día hábil de semana'
      console.log(i)
      case 3:
      i = 'El ' + daysOfTheWeek[3] + ' es un día hábil de semana'
      console.log(i)
      case 4:
      i = 'El ' + daysOfTheWeek[4] + ' es un día hábil de semana'
      console.log(i)
      case 5:
      i = 'El ' + daysOfTheWeek[5] + ' es un día hábil de semana'
      console.log(i)
      case 6:
      i = 'El ' + daysOfTheWeek[6] + ' es un día de fin de semana'
      console.log(i)
      case 7:
      i = 'El ' + daysOfTheWeek[7] + ' es un día de fin de semana'
      console.log(i)
      case 8:
      i = 'El ' + daysOfTheWeek[8] + ' es un día de fin de semana'
      console.log(i)
      case 9:
      i = daysOfTheWeek[9] + ' es un valor inválido'
      console.log(i)
  }

}



// // Array inicial con los días de la semana
// var daysOfTheWeek = [
//   'Lunes',
//   'Martes',
//   'Miércoles',
//   'Miercoles',
//   'Jueves',
//   'Viernes',
//   'Sábado',
//   'Sabado',
//   'Domingo',
//   'Pato'
// ]

// // Creo una variable para guardar el mensaje según el caso elegido por el usuario
// var message

// // Uso un ciclo for para recorrer el Array y evaluar cada día de la semana
// for (var i = 0; i < daysOfTheWeek.length; i++) {
//   var day = daysOfTheWeek[i]

//   // Comparo cada día del Array con todos los casos posibles
//   switch (day) {
//     case 'Lunes':
//     case 'Martes':
//     case 'Miércoles':
//     case 'Jueves':
//     case 'Viernes':
//       message = 'Es un día habíl'
//       break
//     case 'Sábado':
//     case 'Domingo':
//       message = 'Es día de fin de semana'
//       break
//     default:
//       message = 'Ingresaste cualquier cosa!'
//       break
//   }
// }

// // Muestro en consola el mensaje según el caso con el que coincidió
// console.log(message)