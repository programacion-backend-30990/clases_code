class Employee {

    constructor(name) {
        this.name = name
    }

    speak() {
        console.log(`Hiii, my name is ${this.name} and my type is ${this.type}`)
    }
}

class FullTimeEmployee extends Employee {
    constructor(name) {
        super(name)
        this.type = 'full-time'
    }
}

class PartTimeEmployee extends Employee {
    constructor(name) {
        super(name)
        this.type = 'part-time'
    }
}

class ContractorEmployee extends Employee {
    constructor(name) {
        super(name)
        this.type = 'contractor'
    }
}


class MyEmployeeFactory {
    createEmployee(data) {
        if (data.type == 'full') return new FullTimeEmployee(data.name)
        if (data.type == 'part') return new PartTimeEmployee(data.name)
        if (data.type == 'contractor') return new ContractorEmployee(data.name)
    }
}

const factory = new MyEmployeeFactory()
const types = [
    {type: 'full', name: 'Francisco'},
    {type: 'full', name: 'Andres'},
    {type: 'full', name: 'Arturo'},
    {type: 'part', name: 'Daniel'},
    {type: 'part', name: 'Aguston'},
    {type: 'contractor', name: 'Tutora Paola'},
]

const employees = []
types.forEach(type => employees.push(factory.createEmployee(type) ) )

console.log(employees);
employees.forEach(e => e.speak())