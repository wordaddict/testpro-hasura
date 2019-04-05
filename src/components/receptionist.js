import React, { Component } from 'react';
import './receptionist.css';
import { addConsultationMutation } from '../components/addConsultation';
import { Mutation } from "react-apollo";

import uuid from 'uuid/v4'

class Receptionist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            patient_name: "",
            email: "",
            doctor: "",
            phone: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange (evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    handleClick(){
        // this.setState({
        //     patient_name: "",
        //     email: "",
        //     doctor: "",
        //     phone: ""
        // })
    }

    login() {
        this.props.auth.login();
    }
    render() {
        return (
            <Mutation mutation={addConsultationMutation}>
                {(addConsultation, { loading, error, data }) => (
                    
                    <div className="container">
                        <form
                            onSubmit={evt => {
                                evt.preventDefault();
                                addConsultation({
                                    variables: {
                                        objects: {
                                            patient_name: this.state.patient_name,
                                            email: this.state.email,
                                            doctor_name: "mic",
                                            id: uuid(),
                                            consultation_date: new Date(),
                                            prescription_date: new Date()
                                        }
                
                                    }
                                })
                            }} 
                        id="contact" action="" method="post"
                        >
                            <h3>Consultation form patients</h3>
                            <h4>Hasura test</h4>
                            <fieldset>
                                <input placeholder="Your name" name="patient_name" type="text" value={this.state.patient_name} onChange={this.handleChange} tabIndex="1" required autoFocus/>
                            </fieldset>
                            <fieldset>
                                <input placeholder="Your Email Address" name="email" type="email" value={this.state.email} onChange={this.handleChange} tabIndex="2" required/>
                            </fieldset>
                            <fieldset>
                                <input placeholder="Your Phone Number (optional)" name="phone"  type="tel" value={this.state.phone} onChange={this.handleChange} tabIndex="3" required/>
                            </fieldset>
                            <fieldset>
                                <input placeholder="Doctor" name="doctor" type="text" value={this.state.doctor} onChange={this.handleChange} tabIndex="4" required/>
                            </fieldset>
                            <p className="copyright">Designed by Micheal</p>
                            {/* <button type="submit" form="nameform" value="Submit" onClick={
                                // this.addConsultation(insert_todos)
                                this.handleSubmit 
                            }>Submit</button> */}
                            <button onClick={this.handleClick}>Submit</button>
                            { loading && <p>Loading...</p> }
                            { error && <p>Error :( Please try again </p> }
                            { console.log('data from mutation', data) }
                            {/* { !error && loading ? alert('Saved successsfully') : alert('error try again') } */}
                        </form>
                    </div>
                )}
            </Mutation>
        );
    };
}

export default Receptionist;
