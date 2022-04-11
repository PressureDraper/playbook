class Logger {
    constructor(name, age){
      // Al crear este objeto se guardarán estos valores
      this.count = 0
      this.name = name
      this.age = age
    }
    
    log(message) {
      this.count++ // se aumenta el contador interno al llamar este método
      console.log('[' + this.name + '] ' + message + ' ' + this.age)
    }
}

//si se exporta el objeto directamente no se puede pasar parámetros a menos que se cree otro objeto y se use .constructor
module.exports = new Logger('DEFAULT', 1000) // Instanciación del objeto y se exporta