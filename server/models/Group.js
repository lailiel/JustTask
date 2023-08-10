const { Schema, model } = require('mongoose');

const groupSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    owners: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    participants: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    tasks: [{
        type: Schema.Types.ObjectId,
        ref: 'Task'
    }],
    password: {
        type: String,
        required: true
    }
});

const Group = model('Group', groupSchema);
module.exports = Group;