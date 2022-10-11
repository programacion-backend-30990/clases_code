const uuid = require("uuid")

class Student {
    constructor(id, {name, age}) {
        this.id = id
        this.name = name
        this.age = age
    }
}

const studentsDB = {}

function getStudents({field, value}) {
    const students = Object.values(studentsDB)

    if(field && value ) {
        return students.filter(s => s[field] == value)
    }

    return students
}

function getStudent({id}) {
    if(!studentsDB[id]) {
        throw new Error('Student not found')
    }

    return studentsDB[id]
}
 
function createStudent({data}) {
    const id = uuid.v1()
    const newStudent = new Student(id, data)

    studentsDB[id] = newStudent

    return newStudent
}

function updateStudent(id, {data}) {
    if(!studentsDB[id]) {
        throw new Error('Student not found')
    }

    const studentUpdated = new Student(id, data)
    studentsDB[id] = studentUpdated

    return studentUpdated
}

function deleteStudent(id) {
    if(!studentsDB[id]) {
        throw new Error('Student not found')
    }

    const studentDeleted = new Student(id, data)
    delete studentsDB[id]

    return studentDeleted
}

module.exports = {
    getStudent,
    getStudents,
    createStudent,
    updateStudent,
    deleteStudent,
}