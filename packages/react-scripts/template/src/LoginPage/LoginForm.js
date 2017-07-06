import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { Link } from 'react-router-dom';
import '../style/index.css';

const LoginForm = (
  {
    onSubmit,
    onChange,
    errors,
    successMessage,
    instructor,
    error,
  }
) => (
  <form action="/" onSubmit={onSubmit}>
    <div className="container">
      <h1 className="header">School Management App</h1>
      <h2 className="login">Log In</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errors.summary && <p className="error-message">{errors.summary}</p>}
      <div className="field-line">
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          name="username"
          errorText={errors.username}
          onChange={onChange}
          value={instructor.username}
          error={error.username}
        />
      </div>
      <div className="field-line">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          errorText={errors.password}
          onChange={onChange}
          value={instructor.password}
        />
      </div>
      <div className="button-line">
        <button type="submit" className="login-button">Log In</button>
      </div>

      <div className="signup-redirect">
        Don't have an account? Create one. <Link to="/"> Sign Up</Link>
      </div>
    </div>
  </form>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  instructor: PropTypes.object.isRequired,
  error: PropTypes.string.isRequired,
};

export default LoginForm;
