class Student {

    constructor(firstName, lastName, dni, email, id){

        this.firstName = firstName
        this.lastName = lastName
        this.dni = dni
        this.email = email
        var id = Math.random()
    }

    getId() {
        return Math.random()
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

var student = [
    {
    firstName: 'Juan',
    lastName: 'Peréz',
    dni: 22999333,
    email: 'juan@gmail.com'
    },
]

for (var i = 0; i < student.length; i++){
    var newStudents = new Student (student[i].firstName, student[i].lastName, student[i].dni, student[i].email)

    addStudent(newStudents)
}

function addStudent (studentParameter){
    var newStudent = document.createElement("li")
    newStudent.innerHTML = `<h1>${studentParameter.getFullName()}</h1> <h3>DNI: ${studentParameter.dni}</h3> <p> Email: ${studentParameter.email}</p>`

    document.getElementById("studentList").appendChild(newStudent)
}