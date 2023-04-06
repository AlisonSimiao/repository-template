const constants = require("../config/constants")

function pagination({pagina}) {
    const limit = constants.LIMIT
    const offset = limit * (pagina || 0)
    return {
        limit,
        offset
    }
}

module.exports = pagination