import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import IndexItem from '../items/index';
import { showBoards } from '../../actions';

class BoardShow extends React.Component {
  componentDidMount() {
    this.props.showBoards(this.props.match.params.id);
  }

  renderBgColor() {
    return (
      <Helmet>
        <style>
          {
            'body { background: #544a7d; background: -webkit-linear-gradient(to right, #ffd452, #544a7d);  background: linear-gradient(to right, #ffd452, #544a7d); }'
          }
        </style>
      </Helmet>
    );
  }

  renderBoardName() {
    if (this.props.board) {
      return this.props.board.boardName;
    }
  }

  render() {
    return (
      <div>
        {this.renderBgColor()}

        <IndexItem
          boardName={this.renderBoardName()}
          boardId={this.props.match.params.id}
        />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { board: state.Boards[ownProps.match.params.id] };
}

export default connect(
  mapStateToProps,
  { showBoards }
)(BoardShow);
