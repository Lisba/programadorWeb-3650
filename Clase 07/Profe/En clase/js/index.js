var nombreUsuario = "admin"
var password = "asdf1234"

/*if (localStorage.getItem("username") == null && localStorage.getItem("password") == null) {

  localStorage.setItem("username", Math.random())
  localStorage.setItem("password", password)
}*/

if (sessionStorage.getItem("username") == null && sessionStorage.getItem("password") == null) {

  sessionStorage.setItem("username", Math.random())
  sessionStorage.setItem("password", password)
}

//sessionStorage.removeItem("username")
//sessionStorage.removeItem("password")
//sessionStorage.clear()


// JSON.parse

var objetoJson = '{"nombre" : "Juan", "apellido": "Perez"}'
var objetoJS = JSON.parse(objetoJson)

////console.log(objetoJS)

// JSON.stringify

console.log(JSON.stringify(objetoJS))

function httpGetAsync() {

  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {

    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      var usuarioJS = JSON.parse(xmlHttp.responseText)
      console.log(usuarioJS)
    }

  }
  xmlHttp.open("GET", "https://jsonplaceholder.typicode.com/users", true); // true for asynchronous 
  xmlHttp.send(null);
}

httpGetAsync()