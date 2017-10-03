import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Button, Icon, Confirm } from 'semantic-ui-react';
import { deleteUser } from '../actions/users';

class User extends Component {
  state = { open: false }

  show = () => this.setState({ open: true });
  handleCancel = () => this.setState({ open: false });

  handleConfirm = () => {
    const { dispatch, user } = this.props;
    dispatch(deleteUser(user));
    this.setState({ open: false });
  }

  render() {
    const user = this.props.user;
    return (
      <Table.Row key={user.id}>
        <Table.Cell>{user.name}</Table.Cell>
        <Table.Cell>{user.role}</Table.Cell>
        <Table.Cell>{user.username}</Table.Cell>
        <Table.Cell>
          { user.invitation_accepted_at ?
            <Icon name='check' size='large' color='green' /> 
            : 
            <Icon name='wait' size='large' color='yellow' />
          }
        </Table.Cell>
        <Table.Cell>
          <Button onClick={this.show}>
            <Icon name='trash' color='red' /> Delete
          </Button>
          <Confirm
            open={this.state.open}
            onCancel={this.handleCancel}
            onConfirm={this.handleConfirm}
          />
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default connect()(User);