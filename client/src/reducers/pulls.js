const pulls = (state = [], action) => {
  switch(action.type) {
    case 'GET_PULLS':
      return action.pulls;
    default:
      return state;
  }
}

export default pulls;
