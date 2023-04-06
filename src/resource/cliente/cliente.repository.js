const BaseRepository = require('../base.repository');

class ClienteRepository extends BaseRepository{
    constructor(){
        super('clientes')
    }

    async create(data){
        const cliente = {
            cliente: await super.create(data),
            clienteContatos: await clienteContatosRapository.create(data)
        }
        return cliente
    }
}

module.exports = ClienteRepository