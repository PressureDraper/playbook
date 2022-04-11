class Pokemon {
    constructor(name) {
      // this es una variable para referenciar el valor del contexto local de esta clase
      this.name = name // Estás variables se le conocen como atributos
    }

    sayHello () {
      console.log(`My pokemon ${this.name} is waving you!!`)
    }
  
    // método
    sayMessage (message) {
      console.log(`My pokemon: ${this.name} says ${message}`)
    }
  }
  
// Esta clase se exporta en este módulo
module.exports = Pokemon