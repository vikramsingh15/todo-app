import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
import { Link, Redirect } from 'react-router-dom';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '444556093969-7lit6l189ned3qnn0p6hgfbkvjc492hp.apps.googleusercontent.com',
          scope: 'email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.listener(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.listener);
        });
    });
  }

  listener = isSignedIn => {
    if (isSignedIn) {
      const googleUser = this.auth.currentUser.get();
      this.props.signIn(
        googleUser.getId(),
        googleUser.getBasicProfile().getImageUrl()
      );
    } else {
      this.props.signOut();
    }
  };

  signIn = () => {
    this.auth.signIn();
  };

  signOut = () => {
    this.auth.signOut();
  };

  renderData() {
    if (this.props.isSignedIn === null) {
      return <div />;
    } else if (this.props.isSignedIn) {
      return (
        <Link to='/' onClick={this.signOut}>
          <i className='fab fa-google' /> Sign Out
        </Link>
      );
    } else {
      return (
        <button className='btn btn-danger' onClick={this.signIn}>
          <i className='fab fa-google' /> Sign In
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderData()}</div>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.Auth.isSignedIn };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
