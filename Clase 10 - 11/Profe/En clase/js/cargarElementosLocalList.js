var students = [

  {
    nombre: "Juan",
    apellido: "Gomez'"
  },
  {
    nombre: "Mariela",
    apellido: "Perez"
  }
]

function guardar(keyLocalStorage, student) {

  var listaLocalStorage = JSON.parse(localStorage.getItem(keyLocalStorage))

  if (!listaLocalStorage) {
    localStorage.setItem(keyLocalStorage, JSON.stringify([]))
  } else {

    students.push(student)
    listaLocalStorage.push(student)
    localStorage.setItem(keyLocalStorage, JSON.stringify(listaLocalStorage))
  }
}

guardar("students", {
  nombre: "Jose",
  apellido: "Jimenez"
})