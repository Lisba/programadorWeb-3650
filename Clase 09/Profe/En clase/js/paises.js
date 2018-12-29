// FORMA A: con onclick en HTML

function agregarPais() {

  var valorInputPais = document.getElementById("nuevo_pais").value

  if (!valorInputPais) { // valorInputPais == null || valorInputPais == null || valorInputPais == undefined
    return
  }

  var contenedorPaises = document.getElementById("lista_paises")
  var itemPais = document.createElement("li")

  itemPais.innerHTML = document.getElementById("nuevo_pais").value

  contenedorPaises.appendChild(itemPais)

  // Limpiar input
  document.getElementById("nuevo_pais").value = ""
}

// FORMA B: con id en boton de HTML

var botonAgregarPais = document.getElementById("btnAgregarPais")
botonAgregarPais.onclick = agregarPais