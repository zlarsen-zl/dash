const listings = (state = { data: [] }, action) => {
  switch(action.type) {
    case 'GET_REPO':
      return { data: action.repo };
    default:
      return state;
  }
}

export default listings;
