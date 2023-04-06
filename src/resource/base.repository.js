const database = require('./../database/index')

class BaseRepository {
    constructor(nameEntity) {
        this.entity = nameEntity
    }

    async paginate(where, {limit=30, offset=0}) {
        const count = await database(this.entity).where(where).count('id')
        const data = await database(this.entity).select('*').where(where).limit(limit).offset(offset)
        console.log(limit, offset, data);
        return {
            count: count[0].count,
            rows: data
        }
    }

    /***
     * @param {Object} where 
     * 
     * @example
     * 
     * // where = {id: 1}
     * // 'select * from entity WHERE id = 1' 
    */
    async findOne(where) {

        const data = await database(this.entity).select('*').where(where).limit(1)

        return data[0]
    }


    
    async create(data) {
        
        const result = await database(this.entity).insert(data).returning('*')

        console.log(result, data);
        return result[0]
    }

    async delete(where) {
        await database(this.entity)
        .where(where)
        .del()
    }
}

module.exports = BaseRepository