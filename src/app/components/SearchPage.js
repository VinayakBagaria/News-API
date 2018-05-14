import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ArticlesContainer from './ArticlesContainer';
import axios from 'axios';
import './Container.css';

class ArticlesPage extends Component {
  state = { isFetching: false, articles: [] };
  handleChange = e => {
    console.log(e.target.value);
  };
  render() {
    const styles = { textAlign: 'center' };
    const { isFetching, articles } = this.state;
    return (
      <div className="search-area">
        <input type="text" onChange={this.handleChange} />
        {isFetching &&
          articles.length === 0 && <h2 style={styles}>Loading...</h2>}
        {!isFetching && articles.length === 0 && <h2 style={styles}>Empty.</h2>}
        {articles.length > 0 && <ArticlesContainer articles={articles} />}
      </div>
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
