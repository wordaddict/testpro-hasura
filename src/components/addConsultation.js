import gql from "graphql-tag";

export const addConsultationMutation = gql`
  mutation addConsultation($objects: [consultation_insert_input!]!){
    insert_consultation(objects: $objects){
      affected_rows
    }
  }
`;
