const noContentResponse = require("../../responses/noContent.response")
const paginateResponse = require("../../responses/paginate.response")
const successResponse = require("../../responses/success.response")
const pagination = require("../../util/pagination")
const ClienteService = require("./cliente.service")

class ClienteController  extends controller{
    async findOne( {params:  { id }}, res ){ // encontrar um
        const clienteService = new ClienteService()
        try{
            const data = await clienteService.findOne(id)

            successResponse(res, data)
        }
        catch(error){

        }
    }

    async paginate({query}, res){ // encontrar todos 
        const page = pagination(query)
        const clienteService = new ClienteService()
        const {
            count, 
            rows: clientes
        } = await clienteService.paginate(page)

        paginateResponse(res, page, count, clientes)
        
    }

    async create({ body }, res){ // criar um
        try{
            const clienteService = new ClienteService()
            const data = await clienteService.create(body)

            successResponse(res,data)
        }
        catch(erro){
            console.error(erro);
            'status' in erro
            ? res.status(erro.status).json({message: erro.message})
            : res.status(500).json({message: 'Erro interno'})

        }
    }
    
    async delete({ params:{ id } }, res){ // deletar um
        try {
            const clienteService = new ClienteService()
            await clienteService.delete(id)

            noContentResponse(res)
        } catch (erro) {
            console.error(erro);
            'status' in erro
            ? res.status(erro.status).json({message: erro.message})
            : res.status(500).json({message: 'Erro interno'})
        }
    }
}

module.exports = ClienteController