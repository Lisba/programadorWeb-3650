$(document).ready(function () {

  var request = $.ajax({
    url: "http://localhost:4000/customers",
    method: "GET"
  })

  request.done(function (data) {

    var listaClientes = $("#clientes")

    data.forEach(cliente => {

      listaClientes.append(`<li onclick="editar(${cliente.id}, '${cliente.name}')" id="${cliente.id}">${cliente.name}</li>`);
      //listaClientes.append(`<li onclick="borrar(${cliente.id})" id="${cliente.id}">${cliente.name}</li>`);
    });
  })

  request.fail(function (error) {
    console.log(error)
  })

})

function agregar() {

  var nombreCliente = $("#nuevoCliente").val()

  var request = $.ajax({
    url: "http://localhost:4000/customers",
    method: "POST",
    data: {
      name: nombreCliente
    }
  })

  request.done(function (cliente) {

  })

  request.fail(function (error) {
    console.log(error)
  })
}

function editar(id, name) {

  var clienteAEditar = $(`#${id}`)
  clienteAEditar.removeAttr("onclick")
  clienteAEditar.html(`<form onsubmit="editarCliente(${id}, event)"><input id="nombreAEditar" value="${name}"><button>Editar</button></form>`)
}

function editarCliente(id, event) {

  event.preventDefault()

  var nombreClienteAEditar = $("#nombreAEditar").val()

  var request = $.ajax({
    url: "http://localhost:4000/customers/" + id,
    method: "PUT",
    data: {
      name: nombreClienteAEditar
    }
  })

  request.done(function (cliente) {
    console.log(cliente)
    location.reload()
  });

  request.fail(function (error) {
    console.log('Error: ', error)
    location.reload()
  })
}

function borrar(id) {

  var request = $.ajax({
    url: "http://localhost:4000/customers/" + id,
    method: "DELETE"
  })

  request.done(function () {

    $(`#${id}`).hide(2000)
  })
}