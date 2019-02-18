$(document).ready(function(){
    $.ajax({
        url: "https://swapi.co/api/people/?format=json",
        method: "GET"
    })

    .done(function (data){
        console.log(data)
            data.results.forEach(item => {
                console.log(item)
                $("#listNames").append(`<li>${item.name}</li>`)
            })
    })

    .fail(function(error){
        console.log(error)
    })
})

// SOLUCION CON FUNCION GENERICA PROPORCIONADA POR LA DOCUMENTACION DEL DESAFÍO

/*function getData (url, cbk) {
    $.ajax(url)
      .done(function (data) {
        cbk(null, data)
      })
      .fail(function (error) {
        cbk(error)
      })
}

getData("https://swapi.co/api/people/?format=json", mostrarDatos)

function mostrarDatos (error, data){
    if(error){
        console.log(error)
    } else {
        console.log(data.results)
        data.results.forEach(item => {
            console.log(item)
            $("#listNames").append(`<li>${item.name}</li>`)
        })
    }
}*/
