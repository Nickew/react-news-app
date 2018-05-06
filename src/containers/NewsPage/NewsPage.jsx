import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNews } from '../../actions/addNews';
import { removeNews } from '../../actions/removeNews';
import Item from '../../components/News/Item';
import Form from '../../components/Form';
import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';

class NewsPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { title: '', message: '' };
    this.addNewsItem = this.addNewsItem.bind(this);
    this.onUpdateNewsTitle = this.onUpdateNewsTitle.bind(this);
    this.deleteNewsItem = this.deleteNewsItem.bind(this);
    this.onUpdateNewsMessage = this.onUpdateNewsMessage.bind(this);
  }

  onUpdateNewsTitle(e) {
    this.setState({ title: e.target.value });
  }

  onUpdateNewsMessage(e) {
    this.setState({ message: e.target.value });
  }

  addNewsItem() {
    this.props.addNewsItem(this.state.title, this.state.message);
  }

  deleteNewsItem(e, index) {
    e.preventDefault();
    this.props.deleteNewsItem(index);
  }

  render() {
    const { news } = this.props;
    const mappedNews = news.map((entity) =>
      <Item title={entity.title} message={entity.message} key={entity.id} onClick={(e) => this.deleteNewsItem(e, entity.id)} buttonText="Delete" />);
    return (
      <div>
        <Form>
          <Input
            inputID="news-title-input"
            value={this.state.title}
            onChange={this.onUpdateNewsTitle}
            placeholder="title..."
            labelText="Title:"
          />
          <Input
            inputID="news-desc-input"
            value={this.state.message}
            onChange={this.onUpdateNewsMessage}
            placeholder="text..."
            labelText="Description:"
          />
          <Button onClick={this.addNewsItem} buttonText="Add news" />
        </Form>
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
  addNewsItem: addNews,
  deleteNewsItem: removeNews,
};

NewsPage.propTypes = {
  news: PropTypes.array.isRequired,
  addNewsItem: PropTypes.func.isRequired,
  deleteNewsItem: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);