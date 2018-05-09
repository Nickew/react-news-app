import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addNews } from '../../actions/addNews';
import { removeNews } from '../../actions/removeNews';
import { showCatNews } from '../../actions/showCatNews';
import MainContainer from '../../components/MainContainer';
import News from '../../components/News';
import Item from '../../components/News/Item';
import Aside from '../../components/Aside';
import Block from '../../components/Aside/Block';

class NewsPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { title: '', message: '' };
    this.addNewsItem = this.addNewsItem.bind(this);
    this.onUpdateNewsTitle = this.onUpdateNewsTitle.bind(this);
    this.deleteNewsItem = this.deleteNewsItem.bind(this);
    this.onUpdateNewsMessage = this.onUpdateNewsMessage.bind(this);
    this.showCategory = this.showCategory.bind(this);
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

  showCategory(e, id) {
    e.preventDefault();
    this.props.showCategory(id);
  }

  render() {
    const { news, newsCategories } = this.props;
    const mappedCats = newsCategories.map((cat) =>
      <li key={cat.id}><Link to={`/news/category/${cat.url}`} onClick={(e) => this.showCategory(e, cat.id)}>{cat.name}</Link></li>);
    const mappedNews = news.map((entity) =>
      <Item id={entity.id} title={entity.title} message={entity.message} key={entity.id} onClick={(e) => this.deleteNewsItem(e, entity.id)} buttonText="Delete" />);
    return (
      <MainContainer>
        <News>{mappedNews}</News>
        <Aside>
          <Block title="Categories">
            <ul>{mappedCats}</ul>
          </Block>
        </Aside>
      </MainContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  news: state.news,
  newsCategories: state.news_categories,
});

const mapDispatchToProps = {
  addNewsItem: addNews,
  deleteNewsItem: removeNews,
  showCategory: showCatNews,
};

NewsPage.propTypes = {
  news: PropTypes.array.isRequired,
  newsCategories: PropTypes.array.isRequired,
  addNewsItem: PropTypes.func.isRequired,
  deleteNewsItem: PropTypes.func.isRequired,
  showCategory: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);
