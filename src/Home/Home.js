import React, { Component } from 'react';
//import Todo from '.././Components/Todo';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Receptionist from '../components/receptionist';
import Patients from '../components/patients';
import Doctor from '../components/doctor';
import Background from '../images/banner-bg.jpg';


const ACCESS_TOKEN = localStorage.getItem('access_token');
export const client = new ApolloClient({
  uri: "https://test-husura.herokuapp.com/v1alpha1/graphql",
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  }
});

const sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: `url(${Background})`
};


class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    const {role} = this.props;
    return (
      <ApolloProvider client={client}>
        {
          !isAuthenticated() && (
            <div className="container">
              <section style={ sectionStyle }>
              </section>
            </div>
          )
        }
        {
          isAuthenticated() && (
            <>
                {role === 'patient' && <Patients/>}
                {role === 'receptionist' && <Receptionist />}
                {role === 'doctor' && <Doctor />}
            </>   
          )
        }
      </ApolloProvider>
    );
  }
}

export default Home;