const collaborators = (state = [], action) => {
  switch(action.type) {
    case 'GET_REPO_COLLABS':
      return action.collaborators;
    default:
      return state;
  }
}

export default collaborators;
