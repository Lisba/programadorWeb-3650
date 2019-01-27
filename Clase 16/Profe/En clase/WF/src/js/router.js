import crossroads from 'crossroads'
import homeController from './controllers/homeController'

crossroads.addRoute("/", function () {
  $("#root").load("./partials/home.html", homeController)
})

crossroads.addRoute("#/personajes", function () {
  console.log("Pagina de personajes")
})

// En cada cambio del # va a verificar las rutas
$(window).on('hashchange', function () {
  crossroads.parse(window.location.hash)
})

crossroads.parse(window.location.hash) // necesario para que puedan funcionar varias paginas desde una sola