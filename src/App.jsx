import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Menu from './components/Menu';

function App() {
  return (
    <div className='container'>
      <Router>
        <Menu></Menu>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/dashboard' component={Dashboard}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
