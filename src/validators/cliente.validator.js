const { body } = require('express-validator');

const ClienteValidator = {
    create: [
        
        body('img')
        .exists().withMessage('campo img deve existir')
        .isLength({max: 20}).withMessage('a imagem deve ter no maximo 20 letras')
        .isURL().withMessage('deve ser um url valido'),

        body('name')
        .exists().withMessage('campo nome deve existir')
        .isLength({max: 100}).withMessage('a imagem deve ter no maximo 100 letras'),

        body('job')
        .exists().withMessage('campo job deve existir')
        .isLength({max: 20}).withMessage('a imagem deve ter no maximo 20 letras'),
    ],

    update: [

    ]

}



module.exports = ClienteValidator