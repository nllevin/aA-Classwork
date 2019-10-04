import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({[field]: e.target.value});
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  render () {
    const { formType, errors } = this.props;
    const [formText, otherPageLink] = formType === 'login' ? 
      ["Log in", <Link to="/signup">Don't have an account? Sign up</Link>] 
      : ["Sign up", <Link to="/login">Already have an account? Log in</Link>];

    return (
      <div className="session-form">
        <h2> {formText} | {otherPageLink} </h2>
        <ul> 
          {errors.session.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input type="text" value={this.state.username} onChange={this.update('username')}/>
          </label>
          <label>Password:
            <input type="password" value={this.state.password} onChange={this.update('password')}/>
          </label>
          <button>{formText}</button>
        </form>
      </div>
    )  
  }
}

export default SessionForm;