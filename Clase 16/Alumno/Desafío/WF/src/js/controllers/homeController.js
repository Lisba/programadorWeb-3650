function homeController(){
    var parrafo = $("<h1 class='text-center'>STAR API WARS</h1>")

    $("#root").fadeOut(2000, function(){
        $("#root").html(parrafo)
        $("#root").fadeIn(2000)
    })
}


export default homeController