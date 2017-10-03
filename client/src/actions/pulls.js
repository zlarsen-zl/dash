import axios from 'axios';
import { setFlash } from './flash';

export const getPulls = (repo) => {
  return(dispatch) => {
    axios.get(`api/pullrequests/index/${repo.name}`)
      .then( res => {
        const { data, headers } = res;
        dispatch({ type: 'GET_PULLS', pulls: data, headers });
      })
      .catch( err => {
        dispatch({ type: 'SET_HEADERS', headers: err.headers });
        dispatch(setFlash('Failed To Get Pull Requests.', 'red'));
      });
  }
}
