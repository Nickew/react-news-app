import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNews } from '../../actions/addNews';
import { removeNews } from '../../actions/removeNews';
import Item from '../../components/News/Item';

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

  onRemoveNews(e, index) {
    e.preventDefault();
    this.props.onRemoveNews(index);
  }

  render() {
    const { news } = this.props;
    const mappedNews = news.map((entity) => <Item title={entity.title} message={entity.message} key={entity.id} onClick={(e) => this.onRemoveNews(e, entity.id)} />);
    return (
      <div>
        <input type="text" value={this.state.title} onChange={this.onUpdateNewsTitle} />
        <input type="text" value={this.state.message} onChange={this.onUpdateNewsMessage} />
        <button onClick={this.onAddNews}>Add entity</button>
        <h3>News:</h3>
        <ul>{mappedNews}</ul>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  news: state.news,
});

const mapDispatchToProps = {
  onAddNews: addNews,
  onRemoveNews: removeNews,
};

App.propTypes = {
  news: PropTypes.array.isRequired,
  onAddNews: PropTypes.func.isRequired,
  onRemoveNews: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
