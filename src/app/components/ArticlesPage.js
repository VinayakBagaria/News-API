import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ArticlesContainer from './ArticlesContainer';
import requestData from './../../actions/fetch_articles';
import './Container.css';

class ArticlesPage extends Component {
  componentDidMount() {
    const {
      dispatch,
      match: {
        params: { id }
      }
    } = this.props;
    dispatch(requestData(`/v1/articles?source=${id}`));
  }
  render() {
    const {
      article: { isFetching, articles },
      match: {
        params: { id }
      }
    } = this.props;
    const styles = { textAlign: 'center' };
    return (
      <Fragment>
        {isFetching &&
          articles.length === 0 && <h2 style={styles}>Loading...</h2>}
        {!isFetching && articles.length === 0 && <h2 style={styles}>Empty.</h2>}
        {articles.length > 0 && (
          <ArticlesContainer articles={articles} source={id} />
        )}
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  const { article } = state;
  return {
    article
  };
}

export default connect(mapStateToProps)(ArticlesPage);
