export default class Pokemon { //EcmaScript 
    constructor(name) {
      // this es una variable para referenciar el valor del contexto local de esta clase
      this.name = name // Estás variables se le conocen como atributos
    }

    sayHello () {
      console.log(`My pokemon ${this.name} is waving you!!`)
    }
}