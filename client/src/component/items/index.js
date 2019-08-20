import React from 'react';
import { indexItems, deleteItems } from '../../actions';
import { connect } from 'react-redux';
import NewItem from './new';
import { Link } from 'react-router-dom';

class ItemIndex extends React.Component {
  componentDidMount = () => {
    this.props.indexItems(this.props.boardId);
  };

  deleteItems = id => {
    this.props.deleteItems(id);
  };

  renderItem = () => {
    return this.props.items.map(item => {
      if (item.boardId === this.props.boardId) {
        return (
          <ul className='list-group list-group-flush' key={item.id}>
            <li className='list-group-item'>
              {item.itemName}
              <div className='float-right '>
                <Link to={`/items/edit/${item.id}`}>
                  <i className='far fa-edit fa-lg' />
                </Link>
                <Link onClick={() => this.deleteItems(item.id)} to='#!'>
                  <i className='fas fa-trash fa-lg ml-3' />
                </Link>
              </div>
            </li>
          </ul>
        );
      }

      return <div />;
    });
  };

  render() {
    return (
      <div className='card m-auto' style={{ maxWidth: '800px' }}>
        <div className='card-header text-center display-4' id='container'>
          {this.props.boardName}
        </div>
        {this.renderItem()}
        <NewItem boardId={this.props.boardId} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { items: Object.values(state.Items) };
};

export default connect(
  mapStateToProps,
  { indexItems, deleteItems }
)(ItemIndex);
