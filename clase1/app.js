const MAYORIA_EDAD = 18

var usuario1 = {
    nombre: "Ramiro",
    apellido: "Lopez",
    edad: 32,
    altura: 1.8,
    peso: 85
}
var usuario2 = {
    nombre: "Maria",
    apellido: "Rodriguez",
    edad: 16,
    altura: 1.65,
    peso: 60
}

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_EDAD
const autorizacion = usuario => esMayorDeEdad(usuario) ? console.log('No necesita autorizacion') : console.log('Necesita autorizacion')

autorizacion(usuario1)
autorizacion(usuario2)
/*
console.log(esMayorDeEdad(usuario1))
console.log(esMayorDeEdad(usuario2))
*/






//console.log(usuario.nombre)












/*
console.log(nombre.charAt(0) + " " + apellido.toUpperCase())
console.log(`${nombre.charAt(0)} ${apellido}`)
*/

/*function indice(peso,altura){
   return peso / (altura * altura)
}

var indice = function(peso,altura){
    return peso / (altura * altura)
}*/

/*var indice = (peso,altura) => peso / (altura * altura)
var edadSiguiente = edad => edad + 1;


console.log( indice(peso,altura) )
console.log( edadSiguiente(edad) )
*/






