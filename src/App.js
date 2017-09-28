import React, { Component } from 'react'
import Auth0Lock from 'auth0-lock'
import { Grid, Row, Col } from 'react-bootstrap'
import Header from './components/Header'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

class App extends Component {
  constructor() {
    super(); 
    this.state = {
      accessToken: '', 
      profile: {}
    }
  }

  componentWillMount = () => {
      this.lock = new Auth0Lock(
          this.props.clientId, 
          this.props.domain,
          this.props.options
      ); 
  }

  componentDidMount = () => {
    // on authentication 
    this.lock.on('authenticated', (authResult) => {
      this.lock.getUserInfo(authResult.accessToken, (error, profile) => {
          if(error) { console.log(error); return; }
          this.setUserData(authResult.accessToken, profile); 
          this.getUserData(); 
      });
    });
  }

  setUserData = (accessToken, profile) => {
    localStorage.setItem('accessToken', accessToken); 
    localStorage.setItem('profile', JSON.stringify(profile)); 
  } 
  
  getUserData = () => {
    if(localStorage.getItem('accessToken') !== null ) {
      this.setState((prevState, props) => {
        return {
          accessToken: localStorage.getItem('accessToken'), 
          profile: JSON.parse(localStorage.getItem('profile'))
        } 
      })
    }
  }
  
  showLock = () => {
    this.lock.show(); 
  }

  logout = () => {
    this.setState((prevState, props) => {
      return {
        accessToken: '', 
        profile: {}
      }
    })
    localStorage.clear(); 
  }
  
  render() {
    const accessToken = this.state.accessToken; 
    return (
      <div>
        <Header 
          onLoginClick={this.showLock} 
          accessToken={accessToken}
          onLogoutClick={this.logout}
          />
        <Grid>
          <Row>
            <Col xs={12} md={12}>
              {
                  (accessToken)   
                   ? <Dashboard />
                   : <Home  />
              }
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}


App.defaultProps = {
  clientId: 'bP8E12B352SIfYuf0h3CvlqluTTyTdZL',
  domain: 'andrwsalcdo-apps.auth0.com',
  options: {
    autofocus: false, 
    rememberLastLogin: false,
    languageDictionary: {
      title: "React-Auth0"
    },
    theme: {
      labeledSubmitButton: false,
      primaryColor: '#61DAFB'
    }
  }
}

export default App