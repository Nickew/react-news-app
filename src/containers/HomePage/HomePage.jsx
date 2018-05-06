import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const HomePage = (props) => (
  <div>
    <Helmet>
      <title>Main page - React.js Boilerplate</title>
    </Helmet>
  
  </div>
);


export default HomePage;
