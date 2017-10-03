import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

class NoAccess extends Component {
  render() {
    return (
      <div>
        <Header>Only admins can view this route</Header>
      </div>
    );
  }
}

export default NoAccess;