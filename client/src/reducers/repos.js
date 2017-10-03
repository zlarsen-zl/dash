const repos = (state = [], action) => {
  switch(action.type) {
    case 'GET_REPOS':
      return action.repos;
    case 'ADD_REPO':
      return [ action.repo, ...state ];
    default:
      return state;
  }
}

export default repos;
