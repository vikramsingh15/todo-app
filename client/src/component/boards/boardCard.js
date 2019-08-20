import React from 'react';

import { Link } from 'react-router-dom';

const BoardCard = props => {
  const link = props.boardId ? `/boards/${props.boardId}` : '#';

  return (
    <div className='col-md-4 mb-4'>
      <div className='card gradient-card'>
        <div className='card-image' style={{ backgroundImage: props.bgImg }}>
          <Link to={link} className='text-decoration-none'>
            <div className='text-dark d-flex h-100 mask blue-gradient-rgba'>
              <div className='first-content align-self-center p-3'>
                <h3 className='card-title '>{props.content}</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BoardCard;
