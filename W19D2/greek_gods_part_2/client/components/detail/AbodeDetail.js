import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FaPencilAlt } from "react-icons/fa";
import { Mutation, Query } from "react-apollo";

import Mutations from "../../graphql/mutations";
const { UPDATE_GOD_ABODE } = Mutations;

import Queries from "../../graphql/queries";
const { FETCH_ABODES } = Queries;

class AbodeDetail extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.god.abode) {
      this.state = {
        abodeId: this.props.god.abode.id
      };
    } else {
      this.state = { abodeId: "unselected" }
    }
  }

  render() {
    
    return (
      
      <Query query={FETCH_ABODES}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error</p>;
          
          const abodeOptions = (
            data.abodes.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))
          );
          
          return (
            <Mutation mutation={UPDATE_GOD_ABODE}>
              {(updateGodAbode, data) => (
                <select 
                  value={this.state.abodeId} 
                  onChange={e => {
                    this.setState({ abodeId: e.target.value }, () => {
                      updateGodAbode({
                        variables: {
                          godId: this.props.god.id,
                          abodeId: this.state.abodeId
                        }
                      });
                    })
                  }}
                >
                  <option value="unselected" disabled>Please select an abode</option>
                  {abodeOptions}
                </select>
              )}
            </Mutation>
          )
        }}
      </Query>
    );
  }
}

export default AbodeDetail;