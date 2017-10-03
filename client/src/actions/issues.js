import axios from 'axios';
import { setFlash } from './flash';

export const getIssues = (cb) => {
  return(dispatch) => {
    axios.get('api/issues/index')
      .then( res => {
        const { data, headers } = res;
        dispatch({ type: 'GET_ISSUES', issues: data, headers });
      })
      .then( cb() )
      .catch( err => {
        dispatch({ type: 'SET_HEADERS', headers: err.headers });
        dispatch(setFlash('Failed To Get Issues.', 'red'));
      });
  }
}

export const addIssue = (issue) => {
  return(dispatch) => {
    axios.post(`/api/issues/create`, { issue })
      .then( res => {
        const { data, headers } = res;
        dispatch({ type: 'ADD_ISSUE', issue: data, headers });
      })
      .catch( err => {
        dispatch({ type: 'SET_HEADERS', headers: err.headers });
        dispatch(setFlash('Failed To Add Issue.', 'red'));
      });
  }
}
