import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteNewsEntry, likeNewsEntry } from '../../actions/newsActions';
import News from '../../components/News';
import Item from '../../components/News/Item';

class NewsList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.deleteNewsEntry = this.deleteNewsEntry.bind(this);
    this.likeNewsEntry = this.likeNewsEntry.bind(this);
  }

  deleteNewsEntry(e, id) {
    e.preventDefault();
    this.props.deleteNewsEntry(id);
  }

  likeNewsEntry(e, id) {
    e.preventDefault();
    this.props.likeNewsEntry(id);
  }

  render() {
    const { news, categoryIndex } = this.props;

    const filteredNewsList = categoryIndex !== undefined ?
      news.filter((entry) => entry.category === categoryIndex) :
      news;

    const newsList = filteredNewsList.map((entry) =>
      (<Item
        id={entry.id}
        title={entry.title}
        message={entry.message}
        key={entry.id}
        onClick={(e) => this.deleteNewsEntry(e, entry.id)}
        buttonText="Delete"
        likeOnClick={(e) => this.likeNewsEntry(e, entry.id)}
        likeButtonText="Like"
        likes={entry.likes}
      />));
    return (
      <News>{ newsList }</News>
    );
  }
}

const mapStateToProps = (state) => ({
  news: state.news,
});

const mapDispatchToProps = {
  deleteNewsEntry,
  likeNewsEntry,
};

NewsList.propTypes = {
  news: PropTypes.array.isRequired,
  categoryIndex: PropTypes.string,
  deleteNewsEntry: PropTypes.func.isRequired,
  likeNewsEntry: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
