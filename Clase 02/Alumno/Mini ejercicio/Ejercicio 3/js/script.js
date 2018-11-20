var meses = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

var mesIngresado = parseInt(prompt("Ingresa un número del 0 al 11"))

switch (mesIngresado) {
  case meses[0]:
    document.write("Este valor representa al mes de Enero!")
    break
  case meses[1]:
    document.write("Este valor representa al mes de Febrero!")
    break
  case meses[2]:
    document.write("Este valor representa al mes de Marzo!")
    break
  case meses[3]:
    document.write("Este valor representa al mes de Abril!")
    break 
  case meses[4]:
    document.write("Este valor representa al mes de Mayo!")
    break
  case meses[5]:
    document.write("Este valor representa al mes de Junio!")
    break
  case meses[6]:
    document.write("Este valor representa al mes de Julio!")
    break
  case meses[7]:
    document.write("Este valor representa al mes de Agosto!")
    break
  case meses[8]:
    document.write("Este valor representa al mes de Septiembre!")
    break
  case meses[9]:
    document.write("Este valor representa al mes de Octubre!")
    break
  case meses[10]:
    document.write("Este valor representa al mes de Noviembre!")
    break
  case meses[11]:
    document.write("Este valor representa al mes de Diciembre!")
    break
  default:
    document.write("Usted ingresó un valor no válido!")
}