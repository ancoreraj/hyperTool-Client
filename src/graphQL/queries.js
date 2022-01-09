import { gql } from '@apollo/client'

export const GET_LOGS = gql`
    query {
        getLogs {
            id,
            createdAt,
            severity,
            component,
            context,
            message,
            tags
        },

    }

`