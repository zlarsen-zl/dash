import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const AdminRoute = ({ role, component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    role === 'admin' ? (
      <Component {...props}/>
     ) : (
       <Redirect to={{
         pathname: '/no_access',
         state: { from: props.location }
       }}/>
     )
  )}/>
)

const mapStateToProps = (state) => {
  return { role: state.user.role };
}

export default connect(mapStateToProps)(AdminRoute);