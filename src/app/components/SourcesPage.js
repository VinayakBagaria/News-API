import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import SourcesContainer from './SourcesContainer';
import requestData from './../../actions/fetch_sources';
import './Container.css';

class SourcesPage extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(requestData());
  }
  render() {
    const {
      source: { isFetching, sources }
    } = this.props;
    const styles = { textAlign: 'center' };
    return (
      <Fragment>
        {isFetching &&
          sources.length === 0 && <h2 style={styles}>Loading...</h2>}
        {!isFetching && sources.length === 0 && <h2 style={styles}>Empty.</h2>}
        {sources.length > 0 && <SourcesContainer sources={sources} />}
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  const { source } = state;
  return {
    source
  };
}

export default connect(mapStateToProps)(SourcesPage);
