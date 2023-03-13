const {Router} = require('express')

const router = Router()

router.use('/clientes', require('./cliente.router'))

module.exports = router