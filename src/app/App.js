import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import SourcesPage from './components/SourcesPage';
import ArticlesPage from './components/ArticlesPage';
import SearchPage from './components/SearchPage';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={SourcesPage} />
          <Route exact path="/source/:id" component={ArticlesPage} />
          <Route exact path="/search" component={SearchPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
