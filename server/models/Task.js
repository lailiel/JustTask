const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
    taskName: {
        type: String,
        required: true,
        trim: true
    },
    description: String,
    due: Boolean,
    dueDate: Date,
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
        enum: ['completed', 'in-progress', 'pending', 'incomplete']
    },
    comment: String,
    dateOflastCompletion: Date,
    completedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Task = model('Task', taskSchema);
module.exports = Task;