const {Router} = require('express')
const ClienteController = require('../componentes/cliente/cliente.controller')

const router = Router()

const clienteController = new  ClienteController()

router.post('', clienteController.create)
router.delete('/:id', clienteController.delete)
router.get('', clienteController.paginate)
router.get('/:id', clienteController.findOne)

module.exports = router