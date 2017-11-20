/**
 * @title:      app index
 * @author:     Monkey
 * @email:      334080374@qq.com
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import 'babel-polyfill';

import * as css from './index.less';
import store from './store';
import Loadable from 'react-loadable';

const MyLoadingComponent = ({isLoading, error}) => {
  // Handle the loading state
  if (isLoading) {
    //Loading.show(); 
    return null;
  }
  // Handle the error state
  else if (error) {
    //Loading.hide(); 
    return null;
  }
  else {
    //Loading.hide();
    return null;
  }
}
const AsyncHome = Loadable({
  loader: ()=>import('./pages/home'/* webpackChunkName:"home" */),
  loading: MyLoadingComponent
});

function App(props) {
  return (
    <div className={css["app"]}>
      {props.children}
    </div>
  )
}

let elem = <Provider store={store} >
<Router>
  <Switch>
      <Route path='/' exact component={AsyncHome} />
  </Switch>
  </Router>
</Provider >

ReactDOM.render(elem, document.getElementById('main'));