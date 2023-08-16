const db = require('../config/connection');
const { User, Group } = require('../models');
const userSeeds = require('./userSeeds.json');
const groupSeeds = require('./groupSeed.json');
const clearDB = require('./clearDB');

db.once('open', async ()=> {
try{
    await clearDB('User', 'users');
    await clearDB('Group', 'groups');

    await User.create(userSeeds);
    await Group.create(groupSeeds);

console.log('Completed!');
process.exit(0);
}catch (err){
    throw err;
}
});