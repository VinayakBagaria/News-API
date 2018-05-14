import React, { Component } from 'react';
import { connect } from 'react-redux';
import requestData from './../actions/fetch_sources';
import './App.css';

class App extends Component {
  componentWillMount() {
    console.log(this.props);
    this.props.dispatch(requestData());
  }
  render() {
    return (
      <div>
        <h1>App</h1>
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
