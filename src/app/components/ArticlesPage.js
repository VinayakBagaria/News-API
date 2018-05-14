import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class ArticlesPage extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
  }
  render() {
    const styles = { textAlign: 'center' };
    return <h2 style={styles}>Loading...</h2>;
  }
}

function mapStateToProps(state) {}

export default connect(mapStateToProps)(ArticlesPage);
