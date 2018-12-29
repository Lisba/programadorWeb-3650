function getLocalList(keyList) {

  var studenList = localStorage.getItem(keyList) // Puede ser null o tener una lista

  if (!studenList) { // Si student list, no existe

    studenList = JSON.stringify([])
    localStorage.setItem(keyList, studenList)
  }
  return JSON.parse(studenList)
}

function agregarAlumno() {
  var alumno = prompt("Ingrese alumno")

  var localList = getLocalList("studentsList")
  localList.push(alumno)
  localStorage.setItem("studentsList", JSON.stringify(localList))
}

//var listaDeStrage = getLocalList("studentsList")
//document.write(listaDeStrage[1])
agregarAlumno()