import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNews } from '../../../actions/addNews';
import Form from '../../../components/Form';
import Input from '../../../components/Form/Input';
import Button from '../../../components/Form/Button';

class AddEntryPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { title: '', message: '' };
    this.addNewsItem = this.addNewsItem.bind(this);
    this.onUpdateNewsTitle = this.onUpdateNewsTitle.bind(this);
    this.onUpdateNewsMessage = this.onUpdateNewsMessage.bind(this);
  }

  onUpdateNewsTitle(e) {
    this.setState({ title: e.target.value });
  }

  onUpdateNewsMessage(e) {
    this.setState({ message: e.target.value });
  }

  addNewsItem() {
    this.props.addNewsItem(this.state.title, this.state.message);
  }

  render() {
    return (
      <Form>
        <Input
          inputID="news-title-input"
          value={this.state.title}
          onChange={this.onUpdateNewsTitle}
          placeholder="title..."
          labelText="Title:"
        />
        <Input
          inputID="news-desc-input"
          value={this.state.message}
          onChange={this.onUpdateNewsMessage}
          placeholder="text..."
          labelText="Description:"
        />
        <Button onClick={this.addNewsItem} buttonText="Add news" />
      </Form>
    );
  }
}

const mapDispatchToProps = {
  addNewsItem: addNews,
};

AddEntryPage.propTypes = {
  addNewsItem: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(AddEntryPage);
