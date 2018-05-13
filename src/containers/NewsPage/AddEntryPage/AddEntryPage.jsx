import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNews } from '../../../actions/addNews';
import Form from '../../../components/Form';
import Input from '../../../components/Form/Input';
import Button from '../../../components/Form/Button';
import Select from '../../../components/Form/Select';

class AddEntryPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { title: '', message: '', category: '' };
    this.addNewsItem = this.addNewsItem.bind(this);
    this.onChangeNewsTitle = this.onChangeNewsTitle.bind(this);
    this.onChangeNewsMessage = this.onChangeNewsMessage.bind(this);
    this.onChangeNewsCategory = this.onChangeNewsCategory.bind(this);
  }

  onChangeNewsTitle(e) {
    this.setState({ title: e.target.value });
  }

  onChangeNewsMessage(e) {
    this.setState({ message: e.target.value });
  }

  onChangeNewsCategory(e) {
    this.setState({ category: e.target.value });
  }

  addNewsItem() {
    this.props.addNewsItem(this.state.category, this.state.title, this.state.message);
  }

  render() {
    const { newsCategories } = this.props;
    return (
      <Form>
        <Select
          labelText="Category:"
          name="news-category-select"
          options={newsCategories}
          value={this.state.category}
          onChange={this.onChangeNewsCategory}
        >
          {newsCategories.map((item) => <option key={item.id} className="select__option" value={item.url}>{item.name}</option>)}
        </Select>
        <Input
          inputID="news-title-input"
          value={this.state.title}
          onChange={this.onChangeNewsTitle}
          placeholder="title..."
          labelText="Title:"
        />
        <Input
          inputID="news-desc-input"
          value={this.state.message}
          onChange={this.onChangeNewsMessage}
          placeholder="text..."
          labelText="Description:"
        />
        <Button onClick={this.addNewsItem} buttonText="Add news" />
      </Form>
    );
  }
}

const mapStateToProps = (state) => ({
  newsCategories: state.news_categories,
});

const mapDispatchToProps = {
  addNewsItem: addNews,
};

AddEntryPage.propTypes = {
  addNewsItem: PropTypes.func.isRequired,
  newsCategories: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEntryPage);
