import React from 'react';
import Helmet from 'react-helmet';

class AboutPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Helmet>
        <title>About Page - React.js Boilerplate</title>
      </Helmet>
    );
  }
}

export default AboutPage;
