    class Facturacion {

      constructor(fecha, cliente) {

        this.id = Math.random()
        this.fecha = fecha
        this.cliente = cliente
      }
    }

    class Cliente {

      constructor(nombre, apellido, email) {

        this.id = Math.random()
        this.nombre = nombre
        this.apellido = apellido
        this.email = email

      }
    }

    class DetalleFacturacion {

      constructor(facturacion, cantidadComprada, producto) {

        this.id = Math.random()
        this.facturacion = facturacion
        this.cantidadComprada = cantidadComprada
        this.producto = producto
      }

    }

    class Producto {

      constructor(nombre) {

        this.nombre = nombre
      }
    }

    var facturacion = [{
        id: 1,
        producto: "Televisor LG",
        cantidad: 5,
        fechaVenta: "12/03/2018",
        cliente: "Juan Perez",
        email: "jperez@email.com"
      },
      {
        id: 2,
        producto: "Plancha Liliana",
        cantidad: 3,
        fechaVenta: "06/08/2018",
        cliente: "Roberto Gomez",
        email: "rgomez@email.com"
      }
    ]

    var clientes = []
    var facturaciones = []
    var productos = []
    var detallesFacturacion = []

    facturacion.forEach(itemFacturacion => {

      var cliente = new Cliente(itemFacturacion.cliente.split(" ")[0], itemFacturacion.cliente.split(" ")[1], itemFacturacion.email)
      clientes.push(cliente)

      var facturacion = new Facturacion(itemFacturacion.fechaVenta, cliente)
      facturaciones.push(facturacion)

      var producto = new Producto(itemFacturacion.producto)
      productos.push(producto)

      var detalleFacturacion = new DetalleFacturacion(facturacion, itemFacturacion.cantidad, producto)
      detallesFacturacion.push(detalleFacturacion)

    })

    // Mostrar por pantalla los detalles de facturacion y datos del cliente, donde las ventas sean superior a 5

    function mostrarVentasSuperioresA5() {

      detallesFacturacion.forEach(detalle => {

        if (detalle.cantidadComprada >= 5) {

          /* console.log(detalle.id)
           console.log(detalle.facturacion.cliente.nombre + " " + detalle.facturacion.cliente.apellido)
           console.log(detalle.cantidadComprada)
           console.log(detalle.producto.nombre)*/

          console.log(detalle)
        }

      })

    }

    mostrarVentasSuperioresA5()