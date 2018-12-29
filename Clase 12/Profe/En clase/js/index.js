$(document).ready(() => {

  // Sin JQ
  //console.log(document.getElementById("nombre").value)

  //Con JQ
  // Con id
  console.log($("#nombre").val())

  // Con class
  console.log($(".control").val())

  // Con name
  console.log($("[name=inputNombre]").val())

  // Cambiarle el valor al input
  $("#nombre").val("Carolina Perez")

  // Acceder a propiedad class
  console.log($("#nombre").prop("class"))

  // Cambiar valor de propiedad
  //console.log($("#nombre").prop("class", "otra-clase"))

  // Agregar clase
  $("#nombre").addClass("is-valid")

  // Quitar clase
  $("#nombre").removeClass("control")

  // Quiero saber si el elemento tiene una clasa dada
  console.log($("#nombre").hasClass("is-valid"))

  // Como obtengo el HTML?
  console.log($("#contenedor").html())

  // Quiero solamente el texto
  console.log($("#contenedor").text())

  // Quiero cambiar estilos a ul

  //$("#contenedor").addClass("sin_bullets")
  $("#contenedor").css("color", "red")

  // Eventos
  $("#boton").click(() => {
    console.log("Se hizo click en el boton!")
    console.log($("#paises").val())
  })

  $("#nombre").blur(() => {
    console.log("Se hizo blur en el input!")
  })

  $("#paises").change(function () {

    // Valor actual
    console.log($(this).val())
    console.log($("#paises option:selected").text())
  })

})

/*document.getElementById("boton").onclick = manejarClick

function manejarClick() {

  console.log("Se hizo click en el boton!")
}*/

/*document.getElementById("paises").onchange = manejarChange

function manejarChange() {

  console.log("Se cambio opcion de Select!")
}*/