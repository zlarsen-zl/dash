import React, { Component } from 'react';
import { Header, Segment, Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { handleLogin } from '../actions/auth';

class Login extends Component {
  state = { email: '', password: '' };

  handleChange = (e) => {
    const { name , value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = () => {
    const { dispatch, history } = this.props;
    const { email, password } = this.state;

    dispatch(handleLogin(email, password, history));
  }

  render() {
    const { email, password } = this.state;

    return(
      <Segment basic>
        <Header as='h1' textAlign='center'>Login</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input 
            autoFocus
            required
            label='Email' 
            placeholder='Email'
            name='email'
            value={email}
            onChange={this.handleChange}
          />
          <Form.Input
            required
            label='password'
            type='password'
            placeholder='password'
            name='password'
            value={password}
            onChange={this.handleChange}
          />
          <Segment textAlign='center' basic>
            <Button primary type='submit'>Submit</Button>
          </Segment>
        </Form>
      </Segment>
    );
  }
}

export default connect()(Login);
