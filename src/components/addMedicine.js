import gql from "graphql-tag";

export const addMedicineMutation = gql`
mutation updateMedicine (
    $where: consultation_bool_exp! = {id:
      {_eq:"5f93ba02-96e4-424f-b21d-0c9ec4da0c80"}
    },
    $set:consultation_set_input = {medicine:"Panadol"}
  ) {
    update_consultation(_set: $set, where:$where) {
      affected_rows
      returning {
        id
        doctor_name
        medicine
        patient_name
      }
    }
  }
`;
