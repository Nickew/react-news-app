import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteNewsEntry } from '../../actions/newsActions';
import MainContainer from '../../components/MainContainer';
import News from '../../components/News';
import Item from '../../components/News/Item';
import Aside from '../../components/Aside';
import Block from '../../components/Aside/Block';

class CatPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.deleteNewsEntry = this.deleteNewsEntry.bind(this);
  }

  deleteNewsEntry(e, index) {
    e.preventDefault();
    this.props.deleteNewsEntry(index);
  }

  render() {
    const { news, newsCategories, categoryId } = this.props;

    let currentCategoryName;

    newsCategories.find((el, index, array) => {
      if (array[index].url === categoryId) {
        currentCategoryName = array[index].name;
      }
      return currentCategoryName;
    });

    const mappedCats = newsCategories.map((cat) =>
      <li key={cat.id}><Link to={`/news/category/${cat.url}`}>{cat.name}</Link></li>);

    const mappedNews = news.map((entity) => { // eslint-disable-line
      if (entity.category === categoryId) {
        return <Item id={entity.id} title={entity.title} message={entity.message} key={entity.id} onClick={(e) => this.deleteNewsEntry(e, entity.id)} buttonText="Delete" />;
      }
    });

    return (
      <MainContainer>
        <Helmet>
          <title>{currentCategoryName}</title>
        </Helmet>
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

const mapStateToProps = (state, ownProps) => ({
  news: state.news,
  newsCategories: state.news_categories,
  categoryId: ownProps.match.params.id,
});

const mapDispatchToProps = {
  deleteNewsEntry,
};

CatPage.propTypes = {
  news: PropTypes.array.isRequired,
  newsCategories: PropTypes.array.isRequired,
  categoryId: PropTypes.string.isRequired,
  deleteNewsEntry: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CatPage);
