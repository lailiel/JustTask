const User = require('../models/User');
const Group = require('../models/Group');
const Task = require('../models/Task');

const resolvers = {

    Date: {
        serialize: (value) => value.toISOString(),
        parseValue: (value) => new Date(value),
        parseLiteral: (ast) => new Date(ast.value),
      },
    Query: {
        users: async () => {
            return await User.find({});
        },
        user: async (parent, { id }) => {
            return await User.findById(id);
        },
        groups: async () => {
            return await Group.find({});
        },
        group: async (parent, { id }) => {
            return await Group.findById(id);
        },
        tasks: async () => {
            return await Task.find({});
        },
        task: async (parent, { id }) => {
            return await Task.findById(id);
        }
    },
    Mutation: {
        createUser: async (parent, { name, email, password }) => {
            console.log("Attempting to create user with:", { name, email, password });
            const user = new User({ name, email, password });
            await user.save();
            //console.log("User saved with ID:", user._id);
            return user;
        },
        deleteUser: async (parent, { id }) => {
            const user = await User.findById(id);
            if (user) {
                await user.remove();
                return true;
            }
            return false;
        },
        createGroup: async (parent, { name, owners, participants, tasks }) => {
            const group = new Group({ name, owners, participants, tasks });
            await group.save();
            return group;
        },
        addUserToGroup: async (parent, { userId, groupId }) => {
            const group = await Group.findById(groupId);
            if (group && !group.participants.includes(userId)) {
                group.participants.push(userId);
                await group.save();
            }
            return group;
        },
        removeUserFromGroup: async (parent, { userId, groupId}) => {
            const group = await Group.findById(groupId);
            if (group) {
                group.participants = group.participants.filter(participant => participant.toString() !== userId);
                await group.save();
            }
            return group;
        },
        createTask: async (parent, { taskName, description, due, dueDate, assigned, assignedTo, repopulate, repopulateValue, dollarValue, dollarAmount, pointValue, pointAmount, state, comment }) => {
            const assignedUser = User.findById(assignedTo.id)
            const task = new Task({ taskName, description, due, dueDate, assigned, assignedUser, repopulate, repopulateValue, dollarValue, dollarAmount, pointValue, pointAmount, state, comment });
            await task.save();
            return task;
        },
        updateTaskStatus: async (parent, { id, state }) => {
            const task = await Task.findById(id);
            if (task) {
                task.state = state;
                await task.save();
            }
            return task;
        }
    }
};

module.exports = resolvers;