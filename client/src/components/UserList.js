import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';
import User from './User';

class UserList extends Component {

  displayUsers = () => (
    this.props.users.map( user => (
      <User key={user.id} user={user} />
    ))
  )

  render() {
    return (
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine>Name</Table.HeaderCell>
            <Table.HeaderCell>Role</Table.HeaderCell>
            <Table.HeaderCell>Github Username</Table.HeaderCell>
            <Table.HeaderCell>Accepted Invitation</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.displayUsers()}
        </Table.Body>
      </Table>
    );
  }
}

const mapStateToProps = (state) => {
  return { users: state.users }
}

export default connect(mapStateToProps)(UserList);
