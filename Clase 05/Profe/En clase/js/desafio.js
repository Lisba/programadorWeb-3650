class Student {

  constructor(firstName, lastName, dni, email) {

    this.firstName = (firstName != "" && firstName != undefined && firstName != null) ? firstName : "" // firstName diferente de "" y null y undefined
    this.lastName = lastName ? lastName : "" // lastName diferente de "" y null y undefined
    this.dni = dni
    this.email = email
  }

  getId() {
    return Math.random()
  }

  getFullName() {
    return `Nombre: ${this.firstName} - Apellido: ${this.lastName}`
  }
}

var students = [{
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

for (var index = 0; index < students.length; index++) {

  var item = students[index];
  var student = new Student(item.firstName, item.lastName, item.dni, item.email)
  document.write(`Id ${student.getId()} <br>`)
  document.write(`Full Name ${student.getFullName()} <br>`)
  document.write(`Dni ${student.dni} <br>`)
  document.write(`Email ${student.email} <br>`)
}