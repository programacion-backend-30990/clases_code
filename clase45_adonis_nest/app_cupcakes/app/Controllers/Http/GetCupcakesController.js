'use strict'

const Cupcake = use('App/Models/Cupcake')

class GetCupcakesController {
    async index({response, view}) {
        const result = await Cupcake.all()
        const cupcakes = result.toJSON()
    
        return view.render('listCupcakes', { cupcakes })
    }

}

module.exports = GetCupcakesController