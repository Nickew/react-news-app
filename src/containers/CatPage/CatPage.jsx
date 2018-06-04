import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NewsList from '../NewsList';
import MainContainer from '../../components/MainContainer';
import Aside from '../../components/Aside';
import Block from '../../components/Aside/Block';

class CatPage extends React.PureComponent {
  render() {
    const { newsCategories, categoryId } = this.props;

    let currentCategoryName;

    newsCategories.find((el, index, array) => {
      if (array[index].url === categoryId) {
        currentCategoryName = array[index].name;
      }
      return currentCategoryName;
    });

    const mappedCats = newsCategories.map((cat) =>
      <li key={cat.id}><Link to={`/news/category/${cat.url}`}>{cat.name}</Link></li>);

    return (
      <MainContainer>
        <Helmet>
          <title>{currentCategoryName}</title>
        </Helmet>
        <NewsList categoryIndex={categoryId} />
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
  newsCategories: state.news_categories,
  categoryId: ownProps.match.params.id,
});

CatPage.propTypes = {
  newsCategories: PropTypes.array.isRequired,
  categoryId: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(CatPage);
