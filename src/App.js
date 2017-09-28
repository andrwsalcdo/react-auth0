import React, { Component } from 'react'
import Auth0Lock from 'auth0-lock'
import { Grid, Row, Col } from 'react-bootstrap'
import Header from './components/Header'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

class App extends Component {

  componentWillMount = () => {
      this.lock = new Auth0Lock(
          this.props.clientId, 
          this.props.domain,
          this.props.options
      ); 
  }


    
  showLock = () => {
    this.lock.show(); 
  }
  


  render() {
    return (
      <div>
        <Header onLoginClick={this.showLock} />
        <Grid>
          <Row>
            <Col xs={12} md={12}>
              <Home  />
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