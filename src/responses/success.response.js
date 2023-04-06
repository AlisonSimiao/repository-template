module.exports = function successResponse(res, data){
    res.status(201).json({message: 'success', data})
}