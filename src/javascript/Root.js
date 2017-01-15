import React, { Component, PropTypes } from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Provider } from 'react-redux';
import { store } from './redux';
import withMaterialUI from './decorators/withMaterialUI';
import * as hooks from './hooks';
// Redux DevTools
import DevTools from './containers/DevTools';

import Menu from './views/Menu';
import Draft from './views/Draft';
import Login from './views/Login';
import Auth from './views/Auth';
import Home from './views/Home';
import Confirm from './views/Confirm';

hooks.bootstrap(store)();

@withMaterialUI
export default class Root extends Component {
  render() {
    return (
        <div>
          <Provider store={store}>
            <Router history={createBrowserHistory()}>
              <Route path='/' component={Home} />
              <Route path='/customer' component={Auth} />
              <Route path='/post/:id/edit' component={Draft} onEnter={hooks.editPost(store)}/>
              <Route path='/post/new' component={Draft}/>
              <Route path='/login' component={Login}/>
              <Route path='/menu' component={Menu}/>
              <Route path='/confirm' component={Confirm}/>
            </Router>
          </Provider>
        </div>
    );
  }
};
