import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import HomePage from '../HomePage';
import NewsPage from '../NewsPage';
import AboutPage from '../AboutPage';
import EntryPage from '../NewsPage/EntryPage';
import Header from '../../components/Header';
import NavMenu from '../../components/Header/NavMenu';
import Main from '../../components/Main';

import './styles.scss';

export default function App() {
  return (
    <div className="app-wrapper" >
      <Helmet defaultTitle="React.js - Boilerplate">
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header>
        <NavMenu>
          <Link to="/">Home</Link>
          <Link to="/news">News</Link>
          <Link to="/about">About</Link>
        </NavMenu>
      </Header>
      <Main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/news/" component={NewsPage} />
          <Route path="/news/:id" component={EntryPage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </Main>
    </div>
  );
}
