import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session';
import Signup from './signup';

const mapDispatchToProps = dispatch => ({
  action: user => dispatch(login(user))
});

const Signin = props => (
  <Signup
    formType="Sign In"
    {...props}
  />
);

export default connect(null, mapDispatchToProps)(Signin);