const ConflictError = require("../../Errors/conflict.error")
const ClienteRepository = require("./cliente.repository")

class ClienteService {

    constructor() {
        this.clienteRepository = new ClienteRepository()
    }

    async findOne(req, res) { // encontrar um

    }

    async paginate(page) { // encontrar todos 
        const {count, rows} = await this.clienteRepository.paginate({},page)

        return {
            count, rows
        }
    }

    async create(body) { // criar um
        const { name } = body

        const cliente = await this.clienteRepository.findOne({ name })

        if (cliente) 
           throw new ConflictError('cliente já existe')
        
        const clienteResult = await this.clienteRepository.create(body)

        return clienteResult
    }

    async delete(body) { // deletar um

    }
}

module.exports = ClienteService