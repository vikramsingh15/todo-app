import React from 'react';
import Modal from '../modal/boardModal';
import BoardForm from './boardForm';
import BoardCard from './boardCard';
import { connect } from 'react-redux';

import { newBoards, indexBoards } from '../../actions';

class BoardIndex extends React.Component {
  constructor(props) {
    super(props);
    this.Ref = React.createRef();
  }

  componentDidMount() {
    this.props.indexBoards();
  }

  onFormSubmit = formValue => {
    this.props.newBoards(formValue);
  };

  removeModal = () => {
    this.Ref.current.click();
  };

  renderModalFooter() {
    return (
      <React.Fragment>
        <button
          type='button'
          className='btn btn-outline-secondary'
          data-dismiss='modal'
          ref={this.Ref}
        >
          Cancel
        </button>
        <input
          type='submit'
          className='btn btn-outline-primary'
          form='myForm'
          value='Create Board'
          onClick={this.removeModal}
        />
      </React.Fragment>
    );
  }

  renderModalBody() {
    return <BoardForm onFormSubmit={this.onFormSubmit} />;
  }

  renderBoard() {
    return this.props.boards.map(board => {
      return (
        board.userId === this.props.auth.userId && (
          <BoardCard
            content={board.boardName}
            boardId={board.id}
            key={board.id}
            bgImg='url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)'
          />
        )
      );
    });
  }

  render() {
    return (
      <div>
        <div className='row'>{this.renderBoard()}</div>
        <button
          type='button'
          className='btn btn-dark'
          data-toggle='modal'
          data-target='#toggle'
        >
          Add New board
        </button>
        <Modal
          title='Create New Board'
          footer={this.renderModalFooter()}
          body={this.renderModalBody()}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { boards: Object.values(state.Boards), auth: state.Auth };
};

export default connect(
  mapStateToProps,
  { newBoards, indexBoards }
)(BoardIndex);
