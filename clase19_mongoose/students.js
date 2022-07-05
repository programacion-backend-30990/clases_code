import mongoose from "mongoose"

const students = [
    {name: 'Joaquin', age: 30, dni: '311ss1122', nota: 7},
    {name: 'Carmelo', age: 22, dni: '222222', nota: 5},
    {name: 'Javier Perez', age: 18, dni: '1212', nota: 0},
    {name: 'Tutor Diego', age: 30, dni: '303030303', nota: 8},
    {name: 'Francisco', age: 12, dni: 'francisco', nota: 10},
    {name: 'Juan Funes', age: 44, dni: 'sqiji91m', nota: 2},
    {name: 'Vanesa Soria', age: 21, dni: 'vanessa', nota: 10},
    {name: 'Nicolas Censabelloa', age: 22, dni: '000000', nota: 0},
    {name: 'R2', age: 10, dni: '2222223333', nota: 1},
    {name: 'Tutora Paola', age: 30, dni: 'paloa30', nota: 9}
]

mongoose.connect('mongodb://localhost:27017/coderhouse')
const Student = mongoose.model('Student', mongoose.Schema({
    name: {type: String, max: 200},
    age: {type: Number},
    dni: {type: String, max: 200},
    nota: {type: Number }
}))

students.forEach(student => {
    const studenteModel = new Student(student)
    studenteModel.save()
        .then(() => console.log('Se guardo el student', student.name))
        .catch((e) => console.log('ERROR ', e))
})

// Retomamos a las 7:35 pm (21:35)