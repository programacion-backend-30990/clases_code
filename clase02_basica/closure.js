
function crearGritarNombre(name) {

    const exclamacion = "!!!!!!!!!"

    return function() {
        console.log(`${name} ${exclamacion}`)
    }

}

const gritarAgustin = crearGritarNombre('Agustin')
const gritarJuanFunes = crearGritarNombre('Juan Funes')

gritarAgustin()
gritarJuanFunes()