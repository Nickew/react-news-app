import React from 'react';
import { connect } from 'react-redux';
import { addNews } from '../../actions/addNews';
import { removeNews } from '../../actions/removeNews';

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = { title: '', message: '' };
    this.onAddNews = this.onAddNews.bind(this);
    this.onUpdateNewsTitle = this.onUpdateNewsTitle.bind(this);
    this.onRemoveNews = this.onRemoveNews.bind(this);
    this.onUpdateNewsMessage = this.onUpdateNewsMessage.bind(this);
  }

  onUpdateNewsTitle(e) {
    this.setState({ title: e.target.value });
  }

  onUpdateNewsMessage(e) {
    this.setState({ message: e.target.value });
  }

  onAddNews() {
    this.props.onAddNews(this.state.title, this.state.message);
  }

  onRemoveNews() {
    this.props.onRemoveNews();
  }

  render() {
    const { news } = this.props;
    const mappedNews = news.map((entity) => <li key={entity.payload.id}>{entity.payload.title}<p>{entity.payload.message}</p></li>);
    return (
      <div>
        <input type="text" value={this.state.title} onChange={this.onUpdateNewsTitle} />
        <input type="text" value={this.state.message} onChange={this.onUpdateNewsMessage} />
        <button onClick={this.onAddNews}>Update news</button>
        <h3>News:</h3>
        <ul>{mappedNews}</ul>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  news: state.news,
});

const mapActionsToProps = {
  onAddNews: addNews,
  onRemoveNews: removeNews,
};

export default connect(mapStateToProps, mapActionsToProps)(App);
