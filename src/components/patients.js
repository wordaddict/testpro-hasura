import React, { Component } from 'react';
import './patients.css'
import { Query } from "react-apollo";
import gql from "graphql-tag";

class Patients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            consultation: null
        }

    }
    render(){
        return (
            <Query
                query={gql`query getPatientConsultations (
                            $where: consultation_bool_exp
                        ) {
                          consultation(where:$where) {
                            id
                            doctor_name
                            patient_name
                          }
                        }
                `}
            >
                {({ loading, error, data  }) => {
                    if (data.consultation === undefined) return null;
                    const consultationObj = data.consultation[0];
                    const consultKeys = Object.keys(consultationObj);
                    console.log('consultationObj', consultationObj);
                    console.log(consultKeys)
                    return (
                        <div className="users-list">
                        <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"></link>
                        <script src="http://code.jquery.com/jquery-2.1.3.min.js"></script>
                        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
                        <div className="container">
                            <div className="row">
                                <div className="panel panel-default user_panel">
                                    <div className="panel-heading">
                                        <h3 className="panel-title">Consultation list</h3>
                                    </div>
                                    <div className="panel-body">
                                        <div className="table-container">
                                            <table className="table-users table" border="0">
                                                <tbody>
                                                    <tr>
                                                        <th>{consultKeys[0]}</th>
                                                        <th>{consultKeys[1]}</th> 
                                                        <th>{consultKeys[2]}</th>
                                                        <th>{consultKeys[3]}</th>
                                                    </tr>
                                                    {data.consultation.map((element) => {
                                                        //return console.log('huys object', element);
                                                        return <tr key={element.id}>
                                                        <td>{element.id}</td>
                                                        <td>{element.doctor_name}</td>
                                                        <td>{element.patient_name}</td>
                                                        <td>{element.__typename}</td>
                                                    </tr>
                                                    })}
                                                    <tr>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )  
                }}
            </Query>
        )
    }
};

export default Patients;