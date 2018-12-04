var string1 = prompt('Si desea escriba o sino no lo haga')

function stringContent (string1) {

  var stringLength = string1.length

  return stringLength
}

if (stringContent(string1) == 0) {
  console.log('El string está vacío')
} else {
  console.log(`El string tiene ${stringContent(string1)} caracteres`)
}