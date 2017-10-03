import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Modal, Button } from 'semantic-ui-react';
import { addUser } from '../actions/users';

const roleOptions = [
  { key: 'admin', text: 'Admin', value: 'admin' },
  { key: 'dev', text: 'Dev', value: 'dev' },
  { key: 'observer', text: 'Observer', value: 'observer' }
];

class UserForm extends Component {
  state = { email: '', username: '', name: '', role: '', modalOpen: false }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSelect = (e, data) => {
    const { name, value } = data;
    this.setState({ [name]: value });
  }

  handleSubmit = () => {
    const { state: { email, username, name, role }, props: { dispatch } } = this;
    const user = { email, username, name, role };
    dispatch(addUser(user));
    this.setState({ email: '', username: '', name: '', role: '', modalOpen: false });
  }

    handleOpen = (e) => this.setState({ modalOpen: true });

    handleClose = (e) => this.setState({ modalOpen: false });

  render() {
    const { email, username, name, role } = this.state;
    return (
      <Modal 
        trigger={<Button onClick={this.handleOpen}>Add User</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        closeIcon='close'
      >
        <Modal.Header>Invite a new user</Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group widths='equal'>
              <Form.Input
                required
                label='Email' 
                placeholder='Email'
                name='email'
                value={email}
                onChange={this.handleChange}
              />
              <Form.Input 
                required
                label='Github Username' 
                placeholder='Github Username'
                name='username'
                value={username}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input
                required
                label='Name' 
                placeholder='Name'
                name='name'
                value={name}
                onChange={this.handleChange}
              />
              <Form.Select
                required
                label='User Role' 
                options={roleOptions} 
                placeholder='User Role'
                name='role'
                value={role}
                onChange={ (e, data) => this.handleSelect(e, data) }
              />
            </Form.Group>
            <Form.Button positive>Submit</Form.Button>
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}

export default connect()(UserForm);