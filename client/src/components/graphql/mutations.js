import { gql } from '@apollo/client'


export const CREATE_USER = gql`
mutation CreateUser($name: String!, $email: String!, $password: String!) {
    createUser(name: $name, email: $email, password: $password) {
      email
      id
      name
    }
  }
`;

export const LOGIN_USER = gql`
mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        id
        name
        email
      }
      token
    }
  }
`;


// export const DELETE_USER = gql`

// `;


// export const CREATE_GROUP = gql`
//     mutation createGroup ( 
//         $name: String!, 
//         $owners: [ID!]!, 
//         $participants: [ID!]!, 
//         $tasks: [ID!]
//             ) {
//             createGroup(
//                 name: $name
//                 owners: $owners
//                 participants: $participants
//                 tasks: $tasks
//             ) {
//                 id
//                 name
//                 owners
//                 participants
//                 tasks
//             }
//         }
// `;


// export const ADD_USER_TO_GROUP = gql`

// `;


// export const REMOVE_USER_FROM_GROUP = gql`

// `;


export const CREATE_TASK = gql`
    mutation Mutation (
        $taskName: String!, 
        $description: String, 
        $due: Boolean, 
        $dueDate: Date, 
        $assigned: Boolean,
        $assignedTo: UserInput,
        $repopulate: Boolean, 
        $repopulateValue: Int,
        $dollarValue: Boolean, 
        $dollarAmount: Int, 
        $pointValue: Boolean, 
        $pointAmount: Int, 
        $state: TaskState, 
        $comment: String
            ) {
            createTask (
                taskName: $taskName
                description: $description
                due: $due, 
                dueDate: $dueDate
                assigned: $assigned,
                assignedTo: $assignedTo
                repopulate: $repopulate
                repopulateValue: $repopulateValue
                dollarValue: $dollarValue
                dollarAmount: $dollarAmount
                pointValue: $pointValue
                pointAmount: $pointAmount
                state: $state 
                comment: $comment
            ) {
                taskName
                description
            }
        }
        
`;


// export const UPDATE_TASK = gql`
//     mutation UpdateTaskStatus($state: TaskState!, $comment: String!, $updateTaskStatusId: ID!) {
//         updateTaskStatus(state: $state, comment: $comment, id: $updateTaskStatusId) {
//             state
//             comment
//           }
//         }
// `;

