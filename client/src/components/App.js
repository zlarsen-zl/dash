import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Flash from './Flash';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import { Switch, Route } from 'react-router-dom';
import FetchUser from './FetchUser';
import Register from './Register';
import AdminRoute from './AdminRoute';
import UsersView from './UsersView';
import NoAccess from './NoAccess';
import InviteConfirmable from './InviteConfirmable';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/invitation/accept' component={InviteConfirmable} />
            <AdminRoute exact path='/users' component={UsersView} />
            <Route exact path='/no_access' component={NoAccess} />
            <Route exact path='/register' component={Register} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </div>
    );
  }
}

export default App;
