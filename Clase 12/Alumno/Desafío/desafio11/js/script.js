$(document).ready(function (){

    $('#exampleInputEmail1').blur(function(){
    
        if (!$('#exampleInputEmail1').val() || $('#exampleInputEmail1').val().indexOf('@') == -1 || $('#exampleInputEmail1').val().indexOf('.') == -1) {
            $('#exampleInputEmail1').addClass('is-invalid')
        } else {
            $('#exampleInputEmail1').removeClass('is-invalid')
            $('#exampleInputEmail1').addClass('is-valid')
        }
    
    })

})

