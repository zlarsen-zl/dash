import { GET_USERS, ADD_USER, DELETE_USER } from '../actions/users';

const users = (state = [], action) => {
  switch(action.type) {
    case GET_USERS:
      return action.users;
    case ADD_USER:
      return [action.user, ...state];
    case DELETE_USER:
      return state.filter(user => user.id !== action.id)
    default:
      return state;
  }
}

export default users;
