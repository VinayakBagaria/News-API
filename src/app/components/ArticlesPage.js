import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ArticlesContainer from './ArticlesContainer';
import requestData from './../../actions/fetch_articles';
import './Container.css';

class ArticlesPage extends Component {
  componentWillMount() {
    const { dispatch, sourceId } = this.props;
    dispatch(requestData(sourceId));
  }
  render() {
    const {
      article: { isFetching, articles }
    } = this.props;
    const styles = { textAlign: 'center' };
    return (
      <Fragment>
        {isFetching &&
          articles.length === 0 && <h2 style={styles}>Loading...</h2>}
        {!isFetching && articles.length === 0 && <h2 style={styles}>Empty.</h2>}
      </Fragment>
    );
  }
}

// {articles.length > 0 && <ArticlesContainer articles={articles} />}
function mapStateToProps(state) {
  const { article } = state;
  return {
    article
  };
}

export default connect(mapStateToProps)(ArticlesPage);
