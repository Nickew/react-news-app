import React from 'react';
import { connect } from 'react-redux';
import { addNews } from '../../actions/addNews';

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = { value: '' };
    this.onAddNews = this.onAddNews.bind(this);
    this.onUpdateNews = this.onUpdateNews.bind(this);
  }

  onUpdateNews(e) {
    this.setState({ value: e.target.value });
  }

  onAddNews() {
    this.props.onAddNews(this.state.value);
  }

  render() {
    const { news } = this.props;
    const mappedNews = news.map((entity) => <li key={entity.id}>{entity.message}</li>);
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.onUpdateNews} />
        <button onClick={this.onAddNews}>Update news</button>
        <h3>News:</h3>
        <p>{mappedNews}</p>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  news: state.news,
});

const mapActionsToProps = {
  onAddNews: addNews,
};

export default connect(mapStateToProps, mapActionsToProps)(App);
