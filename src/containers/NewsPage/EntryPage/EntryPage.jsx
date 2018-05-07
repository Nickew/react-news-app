import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadNewsEntry } from '../../../actions/loadNewsEntry';

class EntryPage extends React.PureComponent {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({

});

export default connect(mapStateToProps, null)(EntryPage);
