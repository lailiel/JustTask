const db = require('../config/connection');
const { User, Group, Task } = require('../models');
const userSeeds = require('./userSeeds.json');
const groupSeeds = require('./groupSeed.json');
const taskSeeds = require('./taskSeed.json');
const clearDB = require('./clearDB');

db.once('open', async ()=> {
try{
    await clearDB('User', 'users');
    await clearDB('Group', 'groups');
    await clearDB('Task', 'tasks');

    await User.create(userSeeds);
    //--------------------------
    await Group.create(groupSeeds);

    await Task.create(taskSeeds)

console.log('Completed!');
process.exit(0);
}catch (err){
    throw err;
}
});