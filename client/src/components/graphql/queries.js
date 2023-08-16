import { gql } from '@apollo/client';


export const QUERY_ALL_USERS = gql`
query allUsers {
    users {
        id
        name
        email
        assignedTasks
        completedTasks
    }
  }
`;


// export const QUERY_SINGLE_USER = gql`

// `;


// export const QUERY_ALL_GROUPS = gql`

// `;


// export const QUERY_SINGLE_GROUP = gql`

// `;


// export const QUERY_ALL_TASKS = gql`

// `;


// export const QUERY_SINGLE_TASK = gql`

// `;