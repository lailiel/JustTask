const User = require('../models/User');
const Group = require('../models/Group');
const Task = require('../models/Task');

const resolvers = {
    Query: {
        users: async () => {
            return await User.find({});
        },
        user: async (_, { id }) => {
            return await User.findById(id);
        },
        groups: async () => {
            return await Group.find({});
        },
        group: async (_, { id }) => {
            return await Group.findById(id);
        },
        tasks: async () => {
            return await Task.find({});
        },
        task: async (_, { id }) => {
            return await Task.findById(id);
        }
    },
    Mutation: {
        createUser: async (_, { name, email, password }) => {
            console.log("Attempting to create user with:", { name, email, password });
            const user = new User({ name, email, password });
            await user.save();
            console.log("User saved with ID:", user._id);
            return user;
        },
        deleteUser: async (_, { id }) => {
            const user = await User.findById(id);
            if (user) {
                await user.remove();
                return true;
            }
            return false;
        },
        createGroup: async (_, { name, owners, participants, tasks }) => {
            const group = new Group({ name, owners, participants, tasks });
            await group.save();
            return group;
        },
        addUserToGroup: async (_, { userId, groupId }) => {
            const group = await Group.findById(groupId);
            if (group && !group.participants.includes(userId)) {
                group.participants.push(userId);
                await group.save();
            }
            return group;
        },
        removeUserFromGroup: async (_, { userId, groupId}) => {
            const group = await Group.findById(groupId);
            if (group) {
                group.participants = group.participants.filter(participant => participant.toString() !== userId);
                await group.save();
            }
            return group;
        },
        createTask: async (_, { taskName, description, priority, dueDate, repopulate, dollarValue, dollarAmount, pointValue, pointAmount, state, comment }) => {
            const task = new Task({ taskName, description, priority, dueDate, repopulate, dollarValue, dollarAmount, pointValue, pointAmount, state, comment });
            await task.save();
            return task;
        },
        updateTaskStatus: async (_, { id, state }) => {
            const task = await Task.findById(id);
            if (task) {
                task.state = state;
                await task.save();
            }
            return task;
        }
    }
};