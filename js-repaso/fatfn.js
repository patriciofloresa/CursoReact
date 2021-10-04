// funciones que se DECLARAN con la palabra reservada function
    // Son clases basadas en prototipos
function Fn() {

    this.prop = 'propiedad'
// return 'Chanchito Feliz'

}

Fn.prototype.lala = function FuncionDeProtoptipo() {}

const r = new Fn()

// Class palabra reservada para crear un objeto con propiedad this.prop

// console.log(r.__proto__ )