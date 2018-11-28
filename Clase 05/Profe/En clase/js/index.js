/*var auto = {
  color: "rojo",
  modelo: 2015,
  ruedas: 4
}*/

/**
 * Antes de ES6
 */

/*function Auto(color, modelo, ruedas) {

  this.color = color
  this.modelo = modelo
  this.ruedas = ruedas

  this.mostrarInformacion = function () {
    document.write(`El modelo del auto es ${this.modelo} y el color ${this.color} y tiene ${this.ruedas} ruedas <br>`)
  }

}

var renault = new Auto("Rojo", 2012, 5)
renault.mostrarInformacion()
//document.write(`El modelo del auto es ${renault.modelo} y el color ${renault.color} y tiene ${renault.ruedas} ruedas <br>`)

var fiat = new Auto("Azul", 2015, 4)
fiat.mostrarInformacion()
//document.write(`El modelo del auto es ${fiat.modelo} y el color ${fiat.color} y tiene ${fiat.ruedas} ruedas <br>`)*/

/**
 * Despues de ES6
 */

class Auto {

  constructor(color, modelo, ruedas) {

    this.color = color
    this.modelo = modelo
    this.ruedas = ruedas
  }

  mostrarInformacion() {
    document.write(`El modelo del auto es ${this.modelo} y el color ${this.color} y tiene ${this.ruedas} ruedas <br>`)
  }

  getModelo() {
    return this.modelo
  }

}

var renault = new Auto("Rojo", 2012, 5)
renault.mostrarInformacion()
document.write(`El modelo es ${renault.getModelo()} <br>`)

var fiat = new Auto("Azul", 2015, 4)
fiat.mostrarInformacion()
document.write(`El modelo es ${fiat.getModelo()} <br>`)