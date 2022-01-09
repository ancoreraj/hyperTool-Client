import { gql } from "@apollo/client";

export const CREATE_AUDIT_MUTATION = gql`
  mutation createLog(
    $severity: String
    $component: String
    $context: String
    $message: String
    $tag: String
  ) {
    createLog(
        severity: $severity
        component: $component
        context: $context
        message: $message
        tag: $tag
    ) {
      id
    }
  }
`;
