import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Navigation from './components/Navigation';

import Home          from './pages/Home';
import CreateComment from './pages/CreateComment';
import DeleteComment from './pages/DeleteComment';
import NotFound      from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/"          component={Home}          />
        <Route path="/comments/create" component={CreateComment} />
        <Route path="/comments/delete" component={DeleteComment} />
        <Route path="*"                component={NotFound}      />
      </Switch>
    </Router>
  );
}

export default App;