'use strict'
const Soda = use('App/Models/Soda')
const { validate } = use('Validator')

class SodaController {
  async index({response}){
    const empty = await Soda.firstOrFail()
    if (!empty){
      return response.json({"message" : "No sodas on the refrigerator!."})
    }
    const sodas = await Soda.all()
    return response.json(sodas)
  }

  async find({response, params}){
    const soda = await Soda.find(params.id)
    if(!soda){
      return response.status(404).json({"message" : "Invalid ID. This soda does not exists."})
    }
    return response.json(soda)
  }

  async store({request, response}){
    const req = request.all()
    const rules = {
      name : 'required|unique:sodas,name|max:40|accepted',
      flavor : 'max:80|accepted',
      cal : 'range:0,1000'
    }
    const validation = await validate(req, rules)
    if(validation.fails()){
      return response.status(422).json({"message" : validation.messages()})
    }
    const soda = new Soda()
    soda.name = req.name
    soda.flavor = req.flavor || "Flavor not defined."
    soda.calories = req.cal || 0
    soda.is_dietetic = req.isd || false
    await soda.save()
    return response.status(201).json(soda)
  }

  async edit({request, response, params}){
    const soda = await Soda.find(params.id)
    if(!soda){
      return response.status(404).json({"message" : "Invalid ID. This soda does not exists."})
    }
    const req = request.all()
    const rules = {
      name : 'max:40|accepted',
      flavor : 'max:80|accepted',
      cal : 'range:0,1000',
      isd: 'boolean'
    }
    if(req.name){
      const exists = await Soda.findBy('name', req.name)
      if(exists && req.name != soda.name){
        return response.status(422).json({"message" : "This soda is already registered"})
      }
    }
    const validation = await validate(req, rules)
    if(validation.fails()){
      return response.status(404).json({"message" : validation.messages()})
    }
    soda.name = req.name || soda.name
    soda.flavor = req.flavor || soda.flavor
    soda.calories = req.cal || soda.calories
    soda.is_dietetic = req.isd || soda.is_dietetic
    await soda.save()
    return response.json(soda)
  }

  async delete({response, params}){
    const soda = await Soda.find(params.id)
    if(!soda){
      return response.status(404).json({"message" : "Invalid ID. This soda does not exists."})
    }
    await soda.delete()
    return response.json({"message" : "Soda deleted succesfully!"})
  }

}

module.exports = SodaController
