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
        document.write(`El nombre del estudiante es: ${this.firstName} ${this.lastName} <br>`)
    }
}

var students = [
    {
      firstName: 'Juan',
      lastName: 'Pérez',
      dni: 45678987,
      email: 'juan@gmail.com'
    },
    {
      firstName: 'Ana',
      lastName: 'Fernandez',
      dni: 45678989,
      email: 'ana@gmail.com'
    },
    {
      firstName: 'Pedro',
      lastName: 'Mármol',
      dni: 45678956,
      email: 'pedro@gmail.com'
    }
  ]

for (i = 0; i < students.length; i++) {
var student = new Student(students[i].firstName, students[i].lastName, students[i].dni, students[i].email )

student.getFullName()
document.write(`El id del estudiante es: ${student.getId()} <br>`)
}

