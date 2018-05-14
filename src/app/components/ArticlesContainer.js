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
    return (
      <Fragment>
        <input
          type="checkbox"
          onChange={this.handleChange}
          value="Reverse Sort"
        />
        <label htmlFor="sorter">Sort descending</label>
        <div className="card-container">
          {this.state.articles.map((article, id) => (
            <Article {...article} key={id} />
          ))}
        </div>
      </Fragment>
    );
  }
}

export default ArticlesContainer;
