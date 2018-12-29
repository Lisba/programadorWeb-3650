var usuarios = [{
    nombre: "Juan",
    apellido: "Perez"
  },
  {
    nombre: "Carolina",
    apellido: "Gomez"
  }
]

// Quiero encontrar a Carolina en array de usuarios y guardarla en un nuevo array

// Forma 1
var aux = []
for (var index = 0; index < usuarios.length; index++) {
  var usuario = usuarios[index]

  if (usuario.nombre == "Carolina") {

    aux.push(usuario)
  }

}

console.log(aux)

// Forma 2

// A
var aux2 = usuarios.filter(function (usuario) {
  console.log(usuario)
  return usuario.nombre == "Carolina"
})

console.log(aux2)

// B
var aux3 = usuarios.filter(usuario => usuario.nombre == "Carolina")

console.log(aux3)