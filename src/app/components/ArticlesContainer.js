import React, { Component, Fragment } from 'react';
import Article from '../containers/Article';

class ArticlesContainer extends Component {
  state = {
    articles: []
  };
  componentDidMount() {
    const { articles } = this.props;
    this.setState({
      articles
    });
  }
  handleChange = () => {
    this.setState({
      articles: this.props.articles.reverse()
    });
  };
  render() {
    const { source } = this.props;
    return (
      <Fragment>
        {source && (
          <Fragment>
            <input
              type="checkbox"
              onChange={this.handleChange}
              value="Reverse Sort"
            />
            <label htmlFor="sorter">Sort descending</label>
          </Fragment>
        )}
        <div className="card-container">
          {this.state.articles.map((article, id) => (
            <Article {...article} key={id} source={this.props.source} />
          ))}
        </div>
      </Fragment>
    );
  }
}

export default ArticlesContainer;
