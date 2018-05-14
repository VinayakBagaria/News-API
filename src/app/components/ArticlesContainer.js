import React, { Component, Fragment } from 'react';
import Source from '../containers/Source';

class ArticlesContainer extends Component {
  state = {
    sources: []
  };
  componentDidMount() {
    const { sources } = this.props;
    this.setState({
      sources
    });
  }
  handleChange = () => {
    this.setState({
      sources: this.props.sources.reverse()
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
          {this.state.sources.map((source, id) => (
            <Source {...source} key={id} />
          ))}
        </div>
      </Fragment>
    );
  }
}

export default ArticlesContainer;
