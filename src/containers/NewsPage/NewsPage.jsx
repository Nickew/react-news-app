import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeNews } from '../../actions/removeNews';
import { likeNews } from '../../actions/likeNews';
import MainContainer from '../../components/MainContainer';
import News from '../../components/News';
import Item from '../../components/News/Item';
import Aside from '../../components/Aside';
import Block from '../../components/Aside/Block';

class NewsPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.deleteNewsItem = this.deleteNewsItem.bind(this);
    this.likeNewsItem = this.likeNewsItem.bind(this);
  }

  deleteNewsItem(e, index) {
    e.preventDefault();
    this.props.deleteNewsItem(index);
  }

  likeNewsItem(e, count) {
    e.preventDefault();
    this.props.likeNewsItem(count);
  }

  render() {
    const { news, newsCategories } = this.props;

    const mappedCats = newsCategories.map((cat) =>
      <li key={cat.id}><Link to={`/news/category/${cat.url}`}>{cat.name}</Link></li>);

    const mappedNews = news.map((entity) =>
      (<Item
        id={entity.id}
        title={entity.title}
        message={entity.message}
        key={entity.id}
        onClick={(e) => this.deleteNewsItem(e, entity.id)}
        buttonText="Delete"
        likeOnClick={(e) => this.likeNewsItem(e, entity.likes)}
        likeButtonText="Like!"
        likes={entity.likes}
      />));

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
  deleteNewsItem: removeNews,
  likeNewsItem: likeNews,
};

NewsPage.propTypes = {
  news: PropTypes.array.isRequired,
  newsCategories: PropTypes.array.isRequired,
  deleteNewsItem: PropTypes.func.isRequired,
  likeNewsItem: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);
