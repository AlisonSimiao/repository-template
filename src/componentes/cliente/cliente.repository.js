const BaseRepository = require("../base.repository");

class ClienteRepository extends BaseRepository{
    constructor(){
        super('cliente')
    }
}

module.exports = ClienteRepository

const repository = new ClienteRepository()