actualizarPantalla()

class Student {

    constructor(firstName, lastName, dni, email){

        this.firstName = firstName
        this.lastName = lastName
        this.dni = dni
        this.email = email
    }

    getId() {
        return Math.random()
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}


function actualizarPantalla(){
    document.getElementById("list").innerHTML = ""
    var listStudents = JSON.parse(localStorage.getItem('listStudents'))

    if(!listStudents) {
        var students = JSON.stringify([])
        localStorage.setItem('listStudents', students)
    } else {
        for(var i = 0; i < listStudents.length; i++){
            var htmlStudent = listStudents[i]
            var addHtml = document.createElement("li")
            addHtml.innerHTML = `<h2>${htmlStudent.firstName} ${htmlStudent.lastName}</h2> <h3>DNI: ${htmlStudent.dni}</h3> <h3>Email: ${htmlStudent.email}</h3>`
            
            document.getElementById("list").appendChild(addHtml)
        }
    }
}


function limpiarInputs(){
    document.getElementById("inputName").value = ""
    document.getElementById("inputLastName").value = ""
    document.getElementById("inputDNI").value = ""
    document.getElementById("inputEmail").value = ""
    document.getElementById("inputDniRemove").value = ""
    document.getElementById("inputSearch").value = ""
}


function addStudent(){    
    var firstName = document.getElementById('inputName').value
    var lastName = document.getElementById('inputLastName').value
    var dni = document.getElementById('inputDNI').value
    var email = document.getElementById('inputEmail').value
    
    if(validarName() !== true){
        alert('¡Ingrese un nombre válido!')
        return
    }

    if(validarDni() !== true){
        alert('¡Ingrese un dni válido!')
        return
    }

    if(validarEmail() !== true){
        alert('¡Ingrese un email válido!')
        return
    }

    var newStudent = new Student (firstName, lastName, dni, email)

    student = document.createElement("li")
    htmlStudent = student.innerHTML = `<h2>${newStudent.firstName} ${newStudent.lastName}</h2> <h3>DNI: ${newStudent.dni}</h3> <h3>Email: ${newStudent.email}</h3>`

    document.getElementById("list").appendChild(student)

    var listStudents = JSON.parse(localStorage.getItem('listStudents'))

    if(listStudents){
        listStudents.push(newStudent)
        localStorage.setItem('listStudents', JSON.stringify(listStudents))
    } else {
        localStorage.setItem('listStudents', JSON.stringify([newStudent]))
    }
    
    limpiarInputs()
}


function removeStudent(){
    var localStorageListStudents = JSON.parse(localStorage.getItem('listStudents'))
    var studentSearched = document.getElementById('inputDniRemove').value
    
    if(studentSearched === ""){
        alert('¡Ingrese un dni válido!')
        return
    }

    var nuevaLista = localStorageListStudents.filter( studentSearch => {
        return studentSearch.dni != studentSearched
    })
    
    localStorage.removeItem('listStudents')
    localStorage.setItem('listStudents', JSON.stringify(nuevaLista))
    
    actualizarPantalla()
    limpiarInputs()
}


function searchStudent(){
    document.getElementById("alumnoBuscado").innerHTML = ""

    var localStorageListStudents = JSON.parse(localStorage.getItem('listStudents'))
    var studentSearched = document.getElementById('inputSearch').value.toLowerCase()

    if(studentSearched === ""){
        alert('¡Ingrese un nombre válido!')
        return
    }

    var nuevaLista = localStorageListStudents.filter( studentSearch => {
        return studentSearch.firstName.toLowerCase().includes(studentSearched)
    })
    
    for(var i = 0; i < nuevaLista.length; i++){

            var addHtml = document.createElement("li")
            addHtml.innerHTML = `<h2>${nuevaLista[i].firstName} ${nuevaLista[i].lastName}</h2> <h3>DNI: ${nuevaLista[i].dni}</h3> <h3>Email: ${nuevaLista[i].email}</h3>`
            
            document.getElementById("alumnoBuscado").appendChild(addHtml)
    }
    
    actualizarPantalla()
    limpiarInputs()
}


function validarName(){    
    var name = document.getElementById("inputName").value
    
    if (name === "") {
        document.getElementById("inputName").className = "form-control is-invalid"
        return false
    } else {
        document.getElementById("inputName").className = "form-control is-valid"
        return true
    }
}


function validarEmail(){
    var email = document.getElementById("inputEmail").value
  
    if (email.indexOf('@') !== -1 && email.indexOf('.') !== -1) {
      document.getElementById("inputEmail").className = "form-control is-valid"
      return true
     } else {
        document.getElementById("inputEmail").className = "form-control is-invalid"
        return false
      }
}


function dniUnico(){
    var localStorageListStudents = JSON.parse(localStorage.getItem('listStudents'))
    var dni = document.getElementById("inputDNI").value

    for (var i = 0; i<localStorageListStudents.length; i++){
        var dniValue = localStorageListStudents[i].dni

        if(dni == dniValue){
            return false
        }
    }
    
    return true
}


function validarDni(){
    var resultadodniUnico = dniUnico()
    var dni = document.getElementById("inputDNI").value
    
    if (dni.indexOf('-') !== -1 || !dni || resultadodniUnico === false) {
        document.getElementById("inputDNI").className = "form-control is-invalid"
        return false
    } else {
        document.getElementById("inputDNI").className = "form-control is-valid"
        return true
    }
}
        