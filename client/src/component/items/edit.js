import React from 'react';
import { connect } from 'react-redux';
import { editItems, showItems } from '../../actions';
import ItemForm from './itemForm';

class EditItem extends React.Component {
  componentDidMount() {
    this.props.showItems(this.props.match.params.id);
  }

  renderItem = () => {
    if (this.props.item) {
      const { itemName } = this.props.item;
      return (
        <ItemForm
          initialValues={{ itemName }}
          onFormSubmit={this.onFormSubmit}
        />
      );
    }
  };

  onFormSubmit = formValues => {
    this.props.editItems(this.props.match.params.id, formValues);
  };

  render() {
    return (
      <div class='text-center border p-5 m-auto' style={{ maxWidth: '700px' }}>
        <p class='h4 mb-4'>Edit Item </p>
        {this.renderItem()}

        <input
          type='submit'
          form='myForm'
          className='btn btn-success'
          value='Edit Item'
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { item: state.Items[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { editItems, showItems }
)(EditItem);
