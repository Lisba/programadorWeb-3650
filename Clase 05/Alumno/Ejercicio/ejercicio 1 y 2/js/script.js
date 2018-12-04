class Rectangulo {

    constructor(alto, ancho) {
        this.alto = alto
        this.ancho = ancho
    }

    showValues(){
        document.write(`El alto del rectángulo es ${this.alto} y el ancho es ${this.ancho} <br>`)
    }

    showArea(){
        document.write('El área del rectángulo es: ' + this.alto * this.ancho + '<br>' + '<br>')
    }
}

var pruebaRectangulo = new Rectangulo(2, 5)
pruebaRectangulo.showValues()
pruebaRectangulo.showArea()

var pruebaRectangulo2 = new Rectangulo(4, 8)
pruebaRectangulo2.showValues()
pruebaRectangulo2.showArea()