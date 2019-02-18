import {setLocalList, getLocalList} from "./../utils/localStorage"

function guardadosController(){
    
    var getLocalListVar = getLocalList("personajes")
    
    getLocalListVar.forEach(objeto => {
        // console.log(objeto)
        var tr = $('<tr class="tr1"></tr>')
        
        tr.append(`<th>${objeto.id}</th>`)
        tr.append(`<td>${objeto.name}</td>`)
        tr.append(`<td class="gender">${objeto.gender}</td>`)
        tr.append(`<td class="height">${objeto.height} cm</td>`)
        tr.append(`<td class="mass">${objeto.mass} kg</td>`)
        tr.append(`<td class="eye_color">${objeto.eye_color}</td>`)
        tr.append(`<td><button name="btn-eliminar" id="${objeto.id}" type="button" class="btn btn-danger">Eliminar</button></td>
        `)
        $("#table_body_guardado").append(tr)
    })

    traducirTexto()

    $("[name=btn-eliminar]").on("click", eliminarPersonaje)
    
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
    
function eliminarPersonaje(event){
    var id = event.target.id
        
    $(`#${id}`).closest("tr").hide(1000)

    var LocalStorageList = getLocalList('personajes')

    var listaActualizada = LocalStorageList.filter(item => {
        return item.id != id
    })

    setLocalList("personajes", listaActualizada)
    // localStorage.setItem("personajes", JSON.stringify(nuevoStorage))
}

export default guardadosController