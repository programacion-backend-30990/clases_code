class MyClass { }
export default MyClass

function f() {}
export { f }



import MyClass from './MyClass.js'
import { f } from './librari.js'

if (true) {
    const { default: Clase } = await import('./Clas1.js')
    const { f } = await import('./Clas2.js')
}