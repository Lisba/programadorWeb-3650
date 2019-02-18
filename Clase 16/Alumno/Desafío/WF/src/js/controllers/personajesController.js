import {setLocalList, getLocalList} from "./../utils/localStorage"

function personajesController(){

    var nextURL = "https://swapi.co/api/people/?format=json"
    var contador = 1
    var listaAUX = []
    
    gestionPersonaje()
    
    $("#btn").on("click", function(){
        gestionPersonaje()
    })

    function gestionPersonaje (){
        $.ajax({
            url: nextURL,
            method: "GET"
        })
    
        .done(function (data){
            console.log(data)
                data.results.forEach((item,index) => {
                    // console.log(item)
                    var tr = $('<tr class="tr1"></tr>')
                    
                    tr.append(`<th>${contador++}</th>`)
                    tr.append(`<td>${item.name}</td>`)
                    tr.append(`<td class="gender">${item.gender}</td>`)
                    tr.append(`<td class="height">${item.height} cm</td>`)
                    tr.append(`<td class="mass">${item.mass} kg</td>`)
                    tr.append(`<td class="eye_color">${item.eye_color}</td>`)
                    tr.append(`<button id="${contador}" type="button" class="btn btn-success save-btn">Guardar</button>
                    `)
                    $("#table_body").append(tr)
                    item = {"id": contador, ...item}
                    listaAUX.push(item)
                })
                nextURL = data.next
                $(".save-btn").on("click", function(){
                    guardarPersonaje($(this).attr("id"))
                    $(this).closest("tr").hide(500)
                })
                traducirTexto()
            })
            
            .fail(function(error){
                console.log(error)
            })

            
    }
    
    
    function guardarPersonaje(id){
    
        var personajeEncontrado = listaAUX.filter(item => item.id == id)[0]
        var listaDePersonajes = getLocalList("personajes")
    
        listaDePersonajes.push(personajeEncontrado)
        
        setLocalList("personajes", listaDePersonajes)
    
    }

    function traducirTexto(){

        $.each($(".gender"), function (indexInArray, value) { 
            var genero = value.textContent

            switch (genero){
                case 'male':
                    value.textContent = 'Hombre'
                    break
                case 'female':
                    value.textContent = 'Mujer'
                    break
                case 'n/a':
                    value.textContent = 'No Aplica'
                    break
                case 'hermaphrodite':
                    value.textContent = 'Hermafrodita'
                    break
                case 'none':
                    value.textContent = 'Ninguno'
                    break
            }
        })

        $.each($(".height"), function (indexInArray, value) { 
            var height = value.textContent

            switch (height){
                case 'unknown cm':
                    value.textContent = 'Desconocido'
                    break
            }
        })

        $.each($(".mass"), function (indexInArray, value) { 
            var mass = value.textContent

            switch (mass){
                case 'unknown kg':
                    value.textContent = 'Desconocido'
                    break
            }
        })

        $.each($(".eye_color"), function (indexInArray, value) { 
            var eye_color = value.textContent
            
            switch (eye_color){
                case 'blue':
                    value.textContent = 'Azul'
                    break
                case 'yellow':
                    value.textContent = 'Amarillo'
                    break
                case 'red':
                    value.textContent = 'Rojo'
                    break
                case 'brown':
                    value.textContent = 'Marrón'
                    break
                case 'blue-gray':
                    value.textContent = 'Azul Grisáceo'
                    break
                case 'black':
                    value.textContent = 'Negro'
                    break
                case 'orange':
                    value.textContent = 'Naranja'
                    break
                case 'hazel':
                    value.textContent = 'Avellana'
                    break
                case 'pink':
                    value.textContent = 'Rosado'
                    break
                case 'gold':
                    value.textContent = 'Dorado'
                    break
                case 'red, blue':
                    value.textContent = 'Rojo, Azul'
                    break
                case 'green, yellow':
                    value.textContent = 'Verde, Amarillo'
                    break
                case 'white':
                    value.textContent = 'Blanco'
                    break
                case 'dark':
                    value.textContent = 'Oscuro'
                    break
                case 'unknown':
                    value.textContent = 'Desconocido'
                    break
            }
        })
        
        
    }
}



export default personajesController