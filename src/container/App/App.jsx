import React from 'react';
import { connect } from 'react-redux';
// import { Provider } from 'react-redux';
import { newsAction } from '../../actions/newsAction';

import Form from '../../components/Form';
import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import NewsSection from '../../components/News';
import NewsItem from '../../components/News/Item';

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  addNewsBind = this.addNews.bind(this);

  addNews() {
    this.props.dispatch(newsAction()); // eslint-disable-line react/prop-types
  }
  render() {
    // const mappedNews = news.map((entity) => <NewsItem key={entity.id} title={entity.title} message={entity.message} />);

    return (
      <NewsSection>
        <Form>
          <Input id="title" label="Title" />
          <Button onClick={this.addNewsBind} message="Submit" />
        </Form>
        <NewsItem title="Title testing #1" message="Trying to understand how to implement redux." />
      </NewsSection>
    );
  }
}

export default App;
