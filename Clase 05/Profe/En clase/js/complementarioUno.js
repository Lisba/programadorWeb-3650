class Rectangulo {

  constructor(alto, ancho) {

    this.alto = alto
    this.ancho = ancho
  }

  mostrarDatos() {
    document.write(`El alto es  ${this.alto} y el ancho es ${this.ancho} <br>`)
  }
}

var rectanguloUno = new Rectangulo(10, 20)
rectanguloUno.mostrarDatos()
document.write(rectanguloUno.alto)