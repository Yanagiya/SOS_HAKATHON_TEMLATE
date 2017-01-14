import React, { Component, PropTypes } from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Provider } from 'react-redux';
import { store } from './redux';
import withMaterialUI from './decorators/withMaterialUI';
import * as hooks from './hooks';
// Redux DevTools
import DevTools from './containers/DevTools';

import Blog from './views/Blog';
import Draft from './views/Draft';
import Login from './views/Login';
import Customer from './views/Customer';
import Home from './views/Home';

hooks.bootstrap(store)();

@withMaterialUI
export default class Root extends Component {
  render() {
    return (
        <div>
          <Provider store={store}>
		  {/*
            <Router history={createBrowserHistory()}>
			  <Route path='/' component={Home}>	
			  */}
				<Route path='/customer' component={Customer}>
              		<Route path='/customer/blog' component={Blog} />
              		<Route path='/post/:id/edit' component={Draft} onEnter={hooks.editPost(store)}/>
              		<Route path='/post/new' component={Draft}/>
              		<Route path='/login' component={Login}/>
			  	</Route>
			  </Route>
            </Router>
          </Provider>
        </div>
    );
  }
};
