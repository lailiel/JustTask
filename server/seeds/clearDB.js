const models = require('../models');
const db = require('../config/connection');

module.exports = async (modelName, collectionName) => {
    try {
        //defines a existing model collection
    let modelExists = await models[modelName].db.db.listCollections({
        name: collectionName
    }).toArray()
    //if the model or models exist, it drops the collection of models 
    if (modelExists.length) {
        await db.dropCollection(collectionName);
    }
    }catch (err){
        throw err;
    }

}