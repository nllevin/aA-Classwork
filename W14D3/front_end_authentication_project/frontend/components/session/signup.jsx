import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value })
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger;
    this.props.action(this.state)
      .then(() => this.props.history.push('/chirps'));
  }

  render() {
    const formType = this.props.formType || "Sign Up";
    return (
      <div className="session-form">
        <h2>{formType}!</h2>
        <form>
          <label>Username:
            <input 
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
            />
          </label>
          <label>Email:
            <input 
              type="text"
              value={this.state.email}
              onChange={this.handleInput('email')}
            />
          </label>
          <label>Password:
            <input 
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
            />
          </label>
          <button onClick={this.handleSubmit}>{formType}</button>
        </form>
      </div>
    );
  }
}

export default Signup;