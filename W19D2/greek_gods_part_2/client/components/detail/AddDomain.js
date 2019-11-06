import React, {Component} from "react";
import { Mutation } from "react-apollo";

import Mutations from "../../graphql/mutations";
const { ADD_GOD_DOMAIN } = Mutations;

class AddDomain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      domain: ""
    };
  }

  handleSubmit(e, addDomain) {
    e.preventDefault();

    addDomain({
      variables: {
        godId: this.props.god.id,
        domain: this.state.domain
      }
    })
      .then(data => {
        console.log(data);
        this.setState({
          domain: ""
        });
      })
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  render() {
    return (
      <Mutation mutation={ADD_GOD_DOMAIN} >
        {(addGodDomain, data) => (
          <form onSubmit={e => this.handleSubmit(e, addGodDomain)}>
            <input
              onChange={this.update("domain")}
              value={this.state.domain}
              placeholder="Domain"
            />          
            <button type="submit">Generate New Domain</button>
          </form>
        )}
      </Mutation>
    );
  }
}

export default AddDomain;

