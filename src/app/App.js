import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import SourcesPage from './components/SourcesPage';
import ArticlesPage from './components/ArticlesPage';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={SourcesPage} />
          <Route exact path="/source/:id" component={ArticlesPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
