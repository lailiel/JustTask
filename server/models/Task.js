const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat')

const taskSchema = new Schema({
    taskName: {
        type: String,
        required: true,
        trim: true
    },
    description: String,
    due: Boolean,
    dueDate: {
        type: Date,
        default: Date.now},
    assigned: Boolean,
    assignedTo: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    repopulate: Boolean,
    repopulateValue: Number,
    dollarValue: Boolean,
    dollarAmount: Number,
    pointValue: Boolean,
    pointAmount: Number,
    state: {
        type: String,
        enum: ['completed', 'in_progress', 'pending', 'incomplete']
    },
    comment: String,
    dateOflastCompletion: {
        type: Date,
        default: Date.now},
    completedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Task = model('Task', taskSchema);
module.exports = Task;