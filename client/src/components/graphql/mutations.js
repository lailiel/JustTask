import { gql } from '@apollo/client'


export const CREATE_USER = gql`
    mutation createUser(
        $name: String!, 
        $email: String!, 
        $password: String!
            ) {
            createUser(
                name: $name
                email: $email
                password: $password
            ) {
                name
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
    mutation createTask (
        $taskName: String!, 
        $description: String, 
        $priority: Int, 
        $dueDate: String, 
        $repopulate: Boolean, 
        $dollarValue: Boolean, 
        $dollarAmount: Float, 
        $pointValue: Boolean, 
        $pointAmount: Int, 
        $state: TaskState, 
        $comment: String
            ) {
            createTask (
                taskName: $taskName
                description: $description
                priority: $priority 
                dueDate: $dueDate
                repopulate: $repopulate
                dollarValue: $dollarValue
                dollarAmount: $dollarAmount
                pointValue: $pointValue
                pointAmount: $pointAmount
                state: $state 
                comment: $comment
            ) {
                id
                taskName
            }
        }
        
`;


// export const UPDATE_TASK = gql`

// `;

