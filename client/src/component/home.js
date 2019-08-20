import React from 'react';
import { connect } from 'react-redux';
import GoogleAuth from './GoogleAuth';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div
        className='card card-image mb-5'
        style={{
          backgroundImage:
            'url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)'
        }}
      >
        <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
          <div>
            <h5 className='pink-text'>
              <i className='fas fa-chart-pie' /> Todo board app
            </h5>
            <h3 className='card-title pt-2'>
              <strong>This is the card title</strong>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
              fugiat, laboriosam, voluptatem, optio vero odio nam sit officia
              accusamus minus error nisi architecto nulla ipsum dignissimos.
              Odit sed qui, dolorum!.
            </p>
            {this.props.auth.isSignedIn ? (
              <Link to='/dashboard'>
                <Link className='btn btn-pink' to='/boards'>
                  <i className='fas fa-clone left' /> View dashboard
                </Link>
              </Link>
            ) : (
              <GoogleAuth />
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ auth: state.Auth });

export default connect(mapStateToProps)(Home);
