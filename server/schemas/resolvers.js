const { User, Group, Task } = require('../models');

const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {

    Date: {
        serialize: (value) => value.toISOString(),
        parseValue: (value) => new Date(value),
        parseLiteral: (ast) => new Date(ast.value),
      },
    Query: {
        users: async () => {
            return await User.find();
        },
        user: async (parent, { id }) => {
            return await User.findById(id);
        },
        groups: async () => {
            return await Group.find().populate("owners").populate("participants");
        },
        group: async (parent, { id }) => {
            return await Group.findById(id).populate("owners").populate("participants");
        },
        tasks: async () => {
            return await Task.find().populate("assignedTo").populate("completedBy");
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
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw AuthenticationError;
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw AuthenticationError;
            }
      
            const token = signToken(user);
      
            return { token, user };
          },
        createGroup: async (parent, { name, owners, password }) => {
            const group = new Group({ name, owners, password });
            await group.save();
            return await Group.findById(group.id).populate("owners");
        },
        addUserToGroup: async (parent, { userId, groupId, groupPassword }) => {
            const group = await Group.findById(groupId);
            // checkpassword
            if (group && groupPassword === group.password && !group.participants.includes(userId)) {
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
            // const assignedUser = User.findById(assignedTo.id)
            const task = new Task({ taskName, description, due, dueDate, assigned, assignedTo, repopulate, repopulateValue, dollarValue, dollarAmount, pointValue, pointAmount, state, comment });
            await task.save();
            return await Task.findById(task.id).populate("assignedTo").populate("completedBy");
        },
        updateTaskStatus: async (parent, { id, state, comment }) => {
            const task = await Task.findById(id);
            if (task) {
                task.state = state;
                task.comment = comment;
                await task.save();
            }
            return task;
        }
    }
};

module.exports = resolvers;