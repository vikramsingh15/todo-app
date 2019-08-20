import React from 'react';
import Navbar from './navbar';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';

import boardIndex from './boards/index';
import boardShow from './boards/show';
import itemEdit from './items/edit';
import Home from './home';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/boards' component={boardIndex} exact />
              <Route path='/boards/:id' component={boardShow} exact />
              <Route path='/items/edit/:id' component={itemEdit} exact />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
