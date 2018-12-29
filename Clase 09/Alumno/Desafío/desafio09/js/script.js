function validarEmail() {
    var email = document.getElementById("inputEmail1").value
  
    if (email.indexOf('@') !== -1 && email.indexOf('.') !== -1) {
      document.getElementById("inputEmail1").className = "form-control is-valid"
      console.log('Good')
     } else {
        document.getElementById("inputEmail1").className = "form-control is-invalid"
        console.log('Bad')
      }
}