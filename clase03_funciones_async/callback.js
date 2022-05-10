// ejecutar es una funcion que recibe otra funcion
const ejecutar = (unaFuncion, params) => unaFuncion(params)
const saludar = nombre => console.log(`saludos a ${nombre}`)

ejecutar(saludar, 'Carmelo Rubiolo')