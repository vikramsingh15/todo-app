import React from 'react';
import ItemForm from './itemForm';
import { createItems } from '../../actions';
import { connect } from 'react-redux';

class NewItem extends React.Component {
  onFormSubmit = formValue => {
    this.props.createItems(this.props.boardId, formValue);
  };

  render() {
    return (
      <div className='accordion'>
        <div className='card-header' id='heading'>
          <h2 className='mb-0'>
            <button
              className='btn btn-link collapsed pl-0 text-decoration-none'
              type='button'
              data-toggle='collapse'
              data-target='#collapse'
              aria-expanded='false'
              aria-controls='collapse'
            >
              <i className='fas fa-plus' /> Add Another Item
            </button>
          </h2>
        </div>
        <div id='collapse' className='collapse'>
          <div className='card-body'>
            <ItemForm onFormSubmit={this.onFormSubmit} form='new' />
            <input
              type='submit'
              form='myForm'
              className='btn btn-outline-success m-1'
              value='Add '
              data-toggle='collapse'
              data-target='#collapse'
            />
            <button
              className='btn btn-outline-warning'
              data-toggle='collapse'
              data-target='#collapse'
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { createItems }
)(NewItem);
