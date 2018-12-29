function validarCantidadCaracteres(input) {

  if (input.value.length < 6) {

    var divError = document.getElementById(`error_${input.id}_incorrecto`)
    divError.innerHTML = "El campo seleccionado debe tener 6 o mas caracteres"
    divError.style.color = "red"
    document.getElementById(input.id).className += " is-invalid"
  } else {

    resetError(input)
  }

}

function resetError(input) {

  var divError = null

  if (input.id == "usuario") {

    divError = document.getElementById("error_usuario_incorrecto")
  } else {

    divError = document.getElementById("error_password_incorrecto")
  }

  divError.innerHTML = ""
  document.getElementById(input.id).className = "form-control is-valid"

}