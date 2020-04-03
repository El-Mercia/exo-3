import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Home          from './pages/Home';
import CreateArticle from './pages/CreateComment';
import DeleteArticle from './pages/DeleteComment';
import NotFound      from './pages/NotFound';

import Navigation from './components/Navigation';

const App = () => {
  return (
    <Router>
      <Navigation/>
      <Switch>
        <Route exact path="/"          component={Home} />
        <Route path="/comment/create" component={CreateComment}  />
        <Route path="/comment/delete" component={DeleteComment}  />  
        <Route path="*"                component={NotFound} /> 
      </Switch>
    </Router>
 );
}

export default App;