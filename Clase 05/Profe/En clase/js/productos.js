class Producto {

  constructor(nombre, stock, categoria) {

    this.nombre = nombre
    this.stock = stock
    this.categoria = categoria
  }

}

class Categoria {

  constructor(nombre, subcategoria) {

    this.nombre = nombre
    this.subcategoria = subcategoria
  }
}

var televisores = new Categoria("Televisores", "T1")
var televisorSony = new Producto("Sony", 900, televisores)
var televisorLG = new Producto("LG", 500, televisores)

// nombre categoria televisor sony
document.write(`Categoria : ${televisorSony.categoria.nombre} <br>`)
document.write(`SubCategoria : ${televisorSony.categoria.subcategoria} <br>`)