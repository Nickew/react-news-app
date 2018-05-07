import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class EntryPage extends React.PureComponent {
  render() {
    const { entry } = this.props;
    return (
      <div>
        <h3>{ entry.title }</h3>
        <p>{ entry.message }</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  entry: state.news.find((entry) => entry.id === Number(ownProps.match.params.id)),
});

EntryPage.propTypes = {
  entry: PropTypes.any.isRequired,
};

export default connect(mapStateToProps, null)(EntryPage);
