class ContenedorMemoria {

    constructor() {
        this.elements = []
    }

    get(id) {
        const elem = this.elements.find(e => e.id == id) 
        if(!elem) throw new Error('Element not found')

        return elem
    }

    getAll() {
        return this.elements
    }

    save(elem) {
        const length = this.elements.length 
        const newId = (length == 0) ? 1 : this.elements[length-1].id + 1
        const newElem = { ...elem, id: newId}

        this.elements.push(newElem)
        return newElem
    }

    
}

module.exports = ContenedorMemoria