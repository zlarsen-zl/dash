import React, { Component } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';

class UsersView extends Component {
  render() {
    return (
      <div>
        <br />
        <UserForm />
        <UserList />
      </div>
    );
  }
}

export default UsersView;