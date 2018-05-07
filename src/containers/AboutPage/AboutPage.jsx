import React from 'react';
import Helmet from 'react-helmet';

class AboutPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>About Page - React.js Boilerplate</title>
        </Helmet>
        <h2>About</h2>
      </div>
    );
  }
}

export default AboutPage;
