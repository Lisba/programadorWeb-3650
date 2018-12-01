class Venta {

  constructor(isbnLibro, cantidad) {

    this.isbnLibro = isbnLibro
    this.cantidad = cantidad
  }
}

class Libro {

  constructor(nombre, autor, isbn, stock) {

    this.nombre = nombre
    this.autor = autor
    this.isbn = isbn
    this.stock = stock
    this.venta = null
  }

  vender() {

    this.stock = this.stock - this.venta.cantidad
  }
}

var libroUno = new Libro("1984", "Orwell", "54656556", 500)

document.write(`Cantidad antes de vender ${libroUno.stock} <br>`)

var ventaUno = new Venta("54656556", 10)

libroUno.venta = ventaUno

libroUno.vender()

document.write(`Cantidad despues de vender ${libroUno.stock} <br>`)