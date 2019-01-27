$(document).ready(function () {

  /*// ocultar
  $("#paises").hide(3000, function () {
    console.log("Desaparecio con hide!")
  })

  //show
  $("#paises").show(3000, function () {
    console.log("Aparecio con show!")
  })*/

  //fadeOut
  /*$("#paises").fadeOut(3000, function () {
    console.log("Se oculto con fadeOut!")
  });

  //fadeIn
  $("#paises").fadeIn(3000, function () {
    console.log("Se muestra con fadeIn!")
  });*/

  //slideDown

  /*$("#paises").slideDown(3000, function () {
    console.log("Se muestra con slideDown!")
  });*/

  //slideUp y delay
  $("#paises").delay(5000).slideUp(3000, function () {
    console.log("Se oculta con slideUp!")
  })

})