import crossroads from 'crossroads'
import homeController from './controllers/homeController'
import personajesController from './controllers/personajesController'
import guardadosController from './controllers/guardadosController'
import contactoController from './controllers/contactoController'

crossroads.addRoute("/", function(){
    $("#root").load("./partials/home.html", homeController)
})

crossroads.addRoute("#/personajes", function(){
    $("#root").load("./partials/personajes.html", personajesController)
})

crossroads.addRoute("#/guardados", function(){
    $("#root").load("./partials/guardados.html", guardadosController)
})

crossroads.addRoute("#/contacto", function(){
    $("#root").load("./partials/contacto.html", contactoController)
})

// En cada cambio del # va a verificar las rutas
$(window).on('hashchange', function () {
    crossroads.parse(window.location.hash)
  })

  crossroads.parse(window.location.hash) // necesario para que puedan funcionar varias paginas desde una sola