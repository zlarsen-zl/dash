
import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import users from './users';
import repos from './repos';
import issues from './issues';
import contributors from './contributors';
import pulls from './pulls';
import collaborators from './collaborators';

const rootReducer = combineReducers({
  user,
  flash,
  users,
  repos,
  issues,
  contributors,
  pulls,
  collaborators,
})

export default rootReducer
