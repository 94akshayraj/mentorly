import { React, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';

import './Login.css';

class Login extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err));
  }
  // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/login');
    const body = await response.json();
    console.log("body", body)
    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="container-1">
            <form>
              <div className="form-group">
                <label htmlFor="email">Username</label>
                <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" placeholder="Password" />
              </div>
              <div className="form-check remember-me">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label" htmlFor="check">Remember me</label>
              </div>
              <Button type="submit" className="btn btn-primary">LOGIN</Button>
              <div />
              <Form.Text id="passwordHelpBlock" muted>
                <a href="#" className="link-primary">Sign in</a>
              </Form.Text>
            </form>
          </div>
        </header>
      </div>
    );
  }
}


export default Login;
