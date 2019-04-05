import React, { Component } from 'react';
import './doctor.css'
import {addMedicineMutation} from '../components/addMedicine'
import { Query, Mutation } from "react-apollo";
import AddMedicine from './updateMed'
import gql from "graphql-tag";

class Doctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            medicine: '',
            inputHidden: true,
            elementDetails: {}
        }

        this.handleDetailsClick = this.handleDetailsClick.bind(this);
        this.handleMedicineClick = this.handleMedicineClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleDetailsClick(element){
        console.log('element from each guy', element)
        this.setState({
            inputHidden: !this.state.inputHidden,
            elementDetails: element
          })
    }

    handleMedicineClick(){
        const details = this.state.elementDetails;
        this.setState({
            medicine: ''
        })
       return <AddMedicine details={details}/>
    }

    handleChange() {

    }

    render(){
        const inputClass = this.state.inputHidden ? 'hide' : '';
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
                                        <h3 className="panel-title">Consultation List</h3>
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
                                                        return <tr key={element.id} onClick={()=>this.handleDetailsClick(element)}>
                                                        <td>{element.id}</td>
                                                        <td>{element.doctor_name}</td>
                                                        <td>{element.patient_name}</td>
                                                        <td>{element.__typename}</td>
                                                    </tr>
                                                    })}
                                                </tbody>
                                            </table>
                                            {/* <Mutation mutation={addMedicineMutation}>
                                                {(addMedicine, { loading, error, data }) => (
                                                    console.log(loading)
                                                )}
                                            </Mutation> */}
                                            <div className={inputClass}>
                                                <form>
                                                    <fieldset>
                                                        <input placeholder="medicine" name="medicine" type="text" onChange={this.handleChange} tabIndex="1" required autoFocus/>
                                                    </fieldset>
                                                </form>
                                                <button onClick={this.handleMedicineClick}>Add medicine</button>
                                            </div>
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

export default Doctor;