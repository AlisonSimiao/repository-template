module.exports = function paginateResponse(res,{ limit }, total, dados){
    res.status(200).json({
        totalDados: total,
        pagina: Math.ceil(total / limit),
        dados
    })
}