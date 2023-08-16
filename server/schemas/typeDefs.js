const express = require('express');
const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        email: String!
        assignedTasks: [Task]
        completedTasks: [Task]
    }

    type Group {
        id: ID!
        name: String!
        owners: [User!]!
        participants: [User!]!
        tasks: [Task!]!
    }

    type Task {
        id: ID!
        taskName: String!
        description: String
        priority: Int
        dueDate: String
        repopulate: Boolean
        dollarValue: Boolean
        dollarAmount: Float
        pointValue: Boolean
        pointAmount: Int
        state: TaskState
        comment: String
        dateOflastCompletion: String
        completedBy: User
    }

    enum TaskState {
        completed
        in_progress
        pending
    }

    type Query {
        users: [User!]!
        user(id: ID!): User
        groups: [Group!]!
        group(id: ID!): Group
        tasks: [Task!]!
        task(id: ID!): Task
    }
    type Mutation {
        createUser(name: String!, email: String!, password: String!): User!
        deleteUser(id: ID!): Boolean!

        createGroup(name: String!, owners: [ID!]!, participants: [ID!]!, tasks: [ID!]): Group!
        addUserToGroup(userId: ID!, groupId: ID!): Group!
        removeUserFromGroup(userId: ID!, groupId: ID!): Group!

        createTask(taskName: String!, description: String, priority: Int, dueDate: String, repopulate: Boolean, dollarValue: Boolean, dollarAmount: Float, pointValue: Boolean, pointAmount: Int, state: TaskState, comment: String): Task!
        updateTaskStatus(id: ID!, state: TaskState!): Task!
    }
`;

module.exports = typeDefs;