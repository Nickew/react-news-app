import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NewsList from '../NewsList';
import MainContainer from '../../components/MainContainer';
import Aside from '../../components/Aside';
import Block from '../../components/Aside/Block';

class NewsPage extends React.PureComponent {
  render() {
    const { newsCategories } = this.props;

    const mappedCats = newsCategories.map((cat) =>
      <li key={cat.id}><Link to={`/news/category/${cat.url}`}>{cat.name}</Link></li>);

    return (
      <MainContainer>
        <NewsList />
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
  newsCategories: state.news_categories,
});

NewsPage.propTypes = {
  newsCategories: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, null)(NewsPage);
