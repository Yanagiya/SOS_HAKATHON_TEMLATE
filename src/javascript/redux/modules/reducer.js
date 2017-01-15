import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import auth from './auth';
import users from './users';
import blogposts from './blogposts';
import draft from './draft';
import table from './table';

export default combineReducers({
  auth,
  table,
  users,
  blogposts,
  draft,
  form
});
