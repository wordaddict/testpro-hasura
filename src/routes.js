import React, {Component} from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import Home from './Home/Home';
//import Receptionist from './receptionist/index';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export class MakeMainRoutes extends Component{
  constructor(props){
    super(props)
    this.state = {
      role: ''
    }

    this.setRole = this.setRole.bind(this);
  }
  

  setRole (newRole) {
    console.log('New role:', newRole);
    this.setState({
      role: newRole
    }, () => {
      localStorage.setItem('user-role', this.state.role);
      auth.login();
    })
  }

  render() {
    const userRole = localStorage.getItem('user-role') || 'patient';
    return (
      <Router history={history}>
        <div>
          <Route path="/" render={(props) => <App auth={auth} setRole={this.setRole} {...props} />} />
          <Route path="/home" render={(props) => <Home role={userRole} auth={auth} {...props} />} />
          {/* <Route path="/home" render={(props) => <Receptionist auth={auth} {...props} />} /> */}
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
        </div>
      </Router>
    );
  }
  
}
