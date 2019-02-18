function contactoController(){
    
    $(document).ready(function (){
    
        var htmlAgregado = $(`<li class="liName">Campo requerido</li>`)
        var htmlAgregado1 = $(`<li class="liTextarea">Campo requerido</li>`)
        var htmlAgregado2 = $(`<li class="liEmail">Campo requerido</li>`)
        
        // ------------------------------------ INPUT NAME --------------------------------------
        
        $('#inputName').on("blur", function(){
    
        
            if (!$('#inputName').val()) {
                $('#inputName').addClass('is-invalid')
                $('#htmlName').append(htmlAgregado)
                $(htmlAgregado).css('color', 'red')
            } else {
                $('#inputName').removeClass('is-invalid')
                $('#inputName').addClass('is-valid')
                $('.liName').remove()
            }
        
        })
    
        // ------------------------------------ INPUT EMAIL --------------------------------------
    
        $('#exampleFormControlInput1').on("blur", function(){
    
            if (!$('#exampleFormControlInput1').val()) {
                $('#exampleFormControlInput1').addClass('is-invalid')
                $('#htmlEmail').append(htmlAgregado2)
                $(htmlAgregado2).css({'color': 'red'})
            }
        
        })
    
        $('#exampleFormControlInput1').keyup(function(){
    
            var htmlArrobaPunto = $(`<li class="liEmail">Debe contener arroba (@) y punto (.)</li>`)
        
            if ($('#exampleFormControlInput1').val().indexOf('@') == -1 || $('#exampleFormControlInput1').val().indexOf('.') == -1) {
                $('#exampleFormControlInput1').addClass('is-invalid')
                $('#htmlEmail').html(htmlArrobaPunto)
                $(htmlArrobaPunto).css({'color': 'red'})
            } else {
                $('#exampleFormControlInput1').removeClass('is-invalid')
                $('#exampleFormControlInput1').addClass('is-valid')
                $('.liEmail').remove()
            }
        
        })
    
        // -------------------------------- INPUT TEXTAREA ---------------------------------------
    
        $('#exampleFormControlTextarea1').on("blur", function(){
        
            if (!$('#exampleFormControlTextarea1').val()) {
                $('#exampleFormControlTextarea1').addClass('is-invalid')
                $('#htmlTextarea').append(htmlAgregado1)
                $(htmlAgregado1).css('color', 'red')
            } else {
                $('#exampleFormControlTextarea1').removeClass('is-invalid')
                $('#exampleFormControlTextarea1').addClass('is-valid')
                $('.liTextarea').remove()
            }
        
        })
    
    })
    
    

}

export default contactoController