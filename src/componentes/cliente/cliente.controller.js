const ClienteService = require("./cliente.service")

class ClienteController {
    async findOne( req, res ){ // encontrar um
        try{

        }
        catch{

        }
    }

    async paginate(req, res){ // encontrar todos 

    }

    async create({ body }, res){ // criar um
        try{
            const clienteService = new ClienteService()
            const data = clienteService.create(body)

            res.status(201).json(data)
        }
        catch{
            res.status(500).json({messagem: 'erro servidor'})
        }
    }
    
    async delete(req, res){ // deletar um
        
    }
}

module.exports = ClienteController