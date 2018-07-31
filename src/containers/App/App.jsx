import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { isAuthorized } from '../../actions/signupActions';
import * as routes from '../../constants/routes';
import HomePage from '../HomePage';
import NewsPage from '../NewsPage';
import AboutPage from '../AboutPage';
import EntryPage from '../NewsPage/EntryPage';
import AddEntryPage from '../NewsPage/AddEntryPage';
import CatPage from '../CatPage';
import SignupPage from '../SignupPage';
import Header from '../../components/Header';
import NavMenu from '../../components/Header/NavMenu';
import Main from '../../components/Main';
import FlashMessagesList from '../FlashMessagesList';

import './styles.scss';

class App extends React.Component {
  componentDidMount() {
    this.props.isAuthorized();
  }

  render() {
    return (
      <div className="app-wrapper" >
        <Helmet defaultTitle="NewsAPP">
          <meta name="description" />
        </Helmet>
        <Header>
          <NavMenu>
            <Link to={routes.MAIN_PAGE}>Home</Link>
            <Link to={routes.NEWS_PAGE}>News</Link>
            <Link to={routes.ABOUT_PAGE}>About</Link>
            <Link to={routes.ADD_NEWS_PAGE}>Add news</Link>
            <Link to={routes.SIGN_PAGE}>Sign Up</Link>
          </NavMenu>
        </Header>
        <FlashMessagesList />
        <Main>
          <Switch>
            <Route exact path={routes.MAIN_PAGE} component={HomePage} />
            <Route exact path={routes.NEWS_PAGE} component={NewsPage} />
            <Route exact path={routes.ABOUT_PAGE} component={AboutPage} />
            <Route exact path={routes.ADD_NEWS_PAGE} component={AddEntryPage} />
            <Route path={`${routes.NEWS_CAT_PAGE}/:id`} component={CatPage} />
            <Route path={`${routes.NEWS_PAGE}/:id`} component={EntryPage} />
            <Route path={routes.SIGN_PAGE} component={SignupPage} />
          </Switch>
        </Main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  routing: state.routing,
});

const mapDispatchToProps = {
  isAuthorized,
};

App.propTypes = {
  isAuthorized: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
