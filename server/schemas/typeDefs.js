const express = require('express');
const { gql } = require('apollo-server-express');

const typeDefs = gql`
scalar Date

    type User {
        id: ID!
        name: String!
        email: String!
        assignedTasks: [Task]
        completedTasks: [Task]
    }

    type Auth {
        token: ID!
        user: User
      }

    type Group {
        id: ID!
        name: String!
        owners: [User!]!
        participants: [User!]!
        tasks: [Task!]!
    }

    input UserInput {
        id: ID!
      }

    type Task {
        id: ID!
        taskName: String!
        description: String
        due: Boolean
        dueDate: Date
        assigned: Boolean
        assignedTo: User
        repopulate: Boolean
        repoulateValue: Int
        dollarValue: Boolean
        dollarAmount: Int
        pointValue: Boolean
        pointAmount: Int
        state: TaskState
        comment: String
        dateOflastCompletion: Date
        completedBy: User
    }

    enum TaskState {
        completed
        in_progress
        pending
        incomplete
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
        login(email: String!, password: String!): Auth

        createGroup(name: String!, owners: [ID!]!, participants: [ID!]!, tasks: [ID!]): Group!
        addUserToGroup(userId: ID!, groupId: ID!): Group!
        removeUserFromGroup(userId: ID!, groupId: ID!): Group!

        createTask(taskName: String!, description: String, due: Boolean, dueDate: Date, assigned: Boolean, assignedTo: UserInput, repopulate: Boolean, repopulateValue: Int, dollarValue: Boolean, dollarAmount: Int, pointValue: Boolean, pointAmount: Int, state: TaskState, comment: String): Task
        updateTaskStatus(id: ID!, state: TaskState!, comment: String! ): Task!
    }
`;

module.exports = typeDefs;