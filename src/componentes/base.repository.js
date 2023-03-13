const database = require('./../database/index')

class BaseRepository {
    constructor(nameEntity) {
        this.entity = nameEntity
    }

    /***
     * @param {Object} where 
     * 
    */
    async findOne(where) {

        const { 
            search, 
            values  
        } 
        = Object.entries(where).reduce((acc, [key, value], index) => {
            acc.search += ` ${key}=$${index + 1} AND `
            acc.values.push(value)

            return acc
        }, {
            search: 'WHERE',
            values: []
        })

        const data = await database.query(`select * from ${this.entity} ${search} 1`, values)

        return data.rows[0]
    }


    async create() {

    }

    async delete() {

    }
}

module.exports = BaseRepository