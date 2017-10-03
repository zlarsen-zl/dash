import axios from 'axios';
import { setFlash } from './flash';

export const GET_USERS = 'GET_USERS';
export const ADD_USER = 'ADD_USER';
export const DELETE_USER ='DELETE_USER';

export const getUsers = () => {
  return(dispatch) => {
    axios.get('/api/users')
      .then( res => {
        const { headers, data } = res;
        dispatch({ type: GET_USERS, users: data, headers })
      })
      .catch( err => {
        dispatch({ type: 'SET_HEADERS', headers: err.headers });
        dispatch(setFlash('Failed to get users', 'red'));
      })
  }
}

export const addUser = (user) => {
  return(dispatch) => {
    axios.post('/api/invitation/send', { user })
      .then( res => {
        const { headers, data } = res;
        dispatch({ type: ADD_USER, user: data, headers });
      })
      .catch( err => {
        dispatch({ type: 'SET_HEADERS', headers: err.headers });
        dispatch(setFlash(`Failed to add ${user.email}`, 'red'));
      })
  }
}

export const deleteUser = (user) => {
  return(dispatch) => {
    axios.delete(`/api/users/${user.id}`)
      .then( res => {
        dispatch({ type: DELETE_USER, id: user.id, headers: res.headers })
        dispatch(setFlash(`deleted ${user.name}`, 'blue'));
      })
      .catch( err => {
        dispatch({ type: 'SET_HEADERS', headers: err.headers });
        dispatch(setFlash(`Failed to delete ${user.name}`, 'red'));
      })
  }
}
