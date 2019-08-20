import React from 'react';
import GoogleAuth from './GoogleAuth';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

class Navbar extends React.Component {
  renderAuth() {
    if (this.props.auth.isSignedIn) {
      return (
        <li className='nav-item avatar dropdown'>
          <Link
            className='nav-link dropdown-toggle'
            data-toggle='dropdown'
            aria-haspopup='true'
            aria-expanded='false'
            to='#!'
          >
            <img
              src={this.props.auth.imageUrl}
              className='rounded-circle z-depth-0'
              alt='avatar'
              height='35'
            />
          </Link>
          <div className='dropdown-menu dropdown-menu-lg-right dropdown-secondary'>
            <GoogleAuth />
          </div>
        </li>
      );
    } else {
      return <GoogleAuth />;
    }
  }

  render() {
    return (
      <nav className='mb-5 navbar navbar-expand-lg navbar-dark orange lighten-1'>
        <Link className='navbar-brand' to='/'>
          <i className='fas fa-clipboard-list' /> Todo Board
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent-555'
          aria-controls='navbarSupportedContent-555'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div
          className='collapse navbar-collapse'
          id='navbarSupportedContent-555'
        >
          {this.props.auth.isSignedIn && (
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item active'>
                <Link className='nav-link' to='/boards'>
                  {' '}
                  Boards <span className='sr-only'>(current)</span>
                </Link>
              </li>
            </ul>
          )}

          <ul className='navbar-nav ml-auto nav-flex-icons'>
            {this.renderAuth()}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return { auth: state.Auth };
};

export default connect(mapStateToProps)(Navbar);
