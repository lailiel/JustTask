import { gql } from '@apollo/client';


export const QUERY_USER_NAMES = gql`
query ExampleQuery {
    users {
      name
      id
    }
  }
`;

// fix this so it pulls group id of logged in user

// export const QUERY_GROUP_MEMBERS = gql`
//     query GroupUsers($id: ID!) {
//         group(Id: $id!) {
//             name
//             owners{
//                 id
//                 name
//             }
//             participants{
//                 id
//                 name
//             }
//         }
//     }
// `;

// fix this so it pulls group id of logged in user

// export const QUERY_GROUP_TASKS = gql`
//     query GroupTasks($id: ID!) {
//         group(Id: $id!) {
//             name
//             tasks{
//                 id
//                 taskName
//                 description
//                 due
//                 dueDate
//                 assigned
//                 assignedTo
//                 repopulate
//                 repopulateValue
//                 dollarValue
//                 dollarAmount
//                 pointValue
//                 pointAmount
//                 state
//                 comment
//             }
//     }
// }
// `;

// fix this so it pulls id of logged in user

// export const QUERY_USER_TASKS = gql`
//     query userTasks($id: ID!) {
//         user(id: ID!) {
//             tasks{
//                 id
//                 taskName
//                 description
//                 due
//                 dueDate
//                 assigned
//                 assignedTo
//                 repopulate
//                 repopulateValue
//                 dollarValue
//                 dollarAmount
//                 pointValue
//                 pointAmount
//                 state
//                 comment
//             }
//     }
// }
// `;


// export const QUERY_SINGLE_USER = gql`

// `;


// export const QUERY_ALL_GROUPS = gql`

// `;


// export const QUERY_SINGLE_GROUP = gql`

// `;



// export const QUERY_NONCOMPLETE_TASKS = gql`
// query IncompleteTasks {
//     tasks (where: {state: "completed"}) {
//       id
//       taskName
//       description
//       due
//       dueDate
//       assigned
//       assignedTo {
//         id
//       }
//       repopulate
//       repoulateValue
//       dollarValue
//       dollarAmount
//       pointValue
//       pointAmount
//       state
//       comment
//       dateOflastCompletion
//       completedBy {
//         name
//       }
//     }
//   }
// `;

export const QUERY_ALL_TASKS = gql`
query Tasks {
    tasks {
      id
      taskName
      description
      due
      dueDate
      assigned
      assignedTo {
        id
      }
      repopulate
      repoulateValue
      dollarValue
      dollarAmount
      pointValue
      pointAmount
      state
      comment
      dateOflastCompletion
      completedBy {
        name
      }
    }
  }
`;


// export const QUERY_SINGLE_TASK = gql`

// `;