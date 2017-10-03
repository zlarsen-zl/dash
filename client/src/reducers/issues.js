const issues = (state = [], action) => {
  switch(action.type) {
    case 'GET_ISSUES':
      return action.issues;
    case 'ADD_ISSUE':
      return [ action.issue, ...state ];
    default:
      return state;
  }
}

export default issues;
