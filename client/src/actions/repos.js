import axios from 'axios';
import { setFlash } from './flash';

export const getRepos = (cb) => {
  return(dispatch) => {
    axios.get('api/repos/index')
      .then( res => {
        const { data, headers } = res;
        dispatch({ type: 'GET_REPOS', repos: data, headers });
      })
      .then( cb() )
      .catch( err => {
        dispatch({ type: 'SET_HEADERS', headers: err.headers });
        dispatch(setFlash('Failed To Get Repos.', 'red'));
      });
  }
}

export const getRepoContribs = (repo) => {
  return(dispatch) => {
    axios.get(`api/repos/index_contributors/${repo.name}`)
      .then( res => {
        const { data, headers } = res;
        dispatch({ type: 'GET_REPO_CONTRIBS', contributors: data, headers });
      })
      .catch( err => {
        dispatch({ type: 'SET_HEADERS', headers: err.headers });
        dispatch(setFlash('Failed To Get Contributors.', 'red'));
      });
  }
}

export const getRepoCollabs = (repo) => {
  return(dispatch) => {
    axios.get(`api/repos/index_collaborators/${repo.name}`)
      .then( res => {
        const { data, headers } = res;
        dispatch({ type: 'GET_REPO_COLLABS', collaborators: data, headers });
      })
      .catch( err => {
        dispatch({ type: 'SET_HEADERS', headers: err.headers });
        dispatch(setFlash('Failed To Get Collaborators.', 'red'));
      });
  }
}

export const addRepo = (repo) => {
  return(dispatch) => {
    axios.post(`api/repos`, { repo } )
      .then( res => {
        const { data, headers } = res;
        dispatch({ type: 'ADD_REPO', repo: data, headers });
      })
      .catch( err => {
        dispatch({ type: 'SET_HEADERS', headers: err.headers });
        dispatch(setFlash('Failed To Add Repo.', 'red'));
      });
  }
}
