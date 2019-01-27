function getData(url, cbk) {

  $.ajax(url)
    .done(function (data) {
      cbk(null, data)
    })
    .fail(function (error) {
      cbk(error, null)
    })
}

getData("https://swapi.co/api/people/?format=json", agregarDatos)

function agregarDatos(error, data) {

  if (error) {

    console.log(error)
  }

  if (data) {

    var personajes = $("#personajes")
    data.results.forEach(item => {
      personajes.append(`<li>${item.name}</li>`);
    });

  }

}

getData("https://swapi.co/api/people/1/?format=json", mostrarAnioNacimiento)

function mostrarAnioNacimiento(error, data) {

  if (error) {

    console.log(error)
  }

  if (data) {

    var anioNacimiento = $("#anio_nacimiento")
    anioNacimiento.append(`<span>${data.birth_year}</span>`);

  }
}