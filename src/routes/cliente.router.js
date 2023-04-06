const {Router} = require('express')
const ClienteController = require('../resource/cliente/cliente.controller')
const ClienteValidator = require('../validators/cliente.validator')
const validate = require('../validators/validate.validator')

const router = Router()

const clienteController = new  ClienteController()

router.post('', validate(ClienteValidator.create), clienteController.create)
router.patch('/:id', validate(ClienteValidator.update), clienteController.update)
router.delete('/:id', clienteController.delete)
router.get('', clienteController.paginate)
router.get('/:id', clienteController.findOne)

module.exports = router