import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import requestData from './../actions/fetch_sources';
import Source from '../containers/Source';
import './App.css';

class App extends Component {
  componentWillMount() {
    console.log(this.props);
    this.props.dispatch(requestData());
  }
  render() {
    const {
      source: { isFetching, sources }
    } = this.props;
    return (
      <div className="card-container">
        {isFetching && <h1>Loading</h1>}
        {sources.map((source, id) => <Source {...source} id={id} />)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { source } = state;
  return {
    source
  };
}

export default connect(mapStateToProps)(App);
