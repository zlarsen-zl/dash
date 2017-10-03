const contributors = (state = [], action) => {
  switch(action.type) {
    case 'GET_REPO_CONTRIBS':
      return action.contributors;
    default:
      return state;
  }
}

export default contributors;
